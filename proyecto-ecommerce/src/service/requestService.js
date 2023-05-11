const Request = require("../repository/request");
const utilities = require('../utilities/Utilities');
const userService = require("../service/userService");
const trolleyService = require("./trolleyService");
const productService = require("./productService");
const Revenue = require("../repository/revenueModel");

async function addRequest(request){
    //validamos que el usuario que quiere comprar el carrito deba tener tarjeta de credito
    const total = await trolleyService.getTotalTrolley(request.carrito);
    const tieneDinero = await hasMoney(request.usuario,total);
    const tieneTarjeta = await hasCard(request.usuario);
    
    if(!tieneTarjeta){
        return 404;
    }
    if(!tieneDinero){
        return 400;
    }
    //si cumplió con las verificaciones...
    //realizar pedido
    const idRequest = utilities.getRandomInt();
    request.id = idRequest;
    request.estado = 0;
    const fechaPedido = utilities.stringToLocalDate(request.fecha_pedido);
    request.fecha_pedido = fechaPedido;
    request.fecha_entrega = utilities.getFutureDate(fechaPedido,5);
    request.ganancia = total*0.05;
    const newRequest = new Request(request);
    newRequest.save();
    //agregamos ganancia a usuario
    const bodyGanancia = {
        usuario:request.usuario,
        ganancia:total*0.95
    }
    const nuevaGanancia = new Revenue(bodyGanancia);
    nuevaGanancia.save();
    //restamos monto a usuario
    await substractMoney(request.usuario, total);
    return newRequest;
}

/*verificaciones para realizar un pedido*/
//ver si cuenta con el dinero suficiente
async function hasMoney(usuario, monto){   
    const montoUsuario = await userService.getCardAmount(usuario);
    console.log(montoUsuario);
    if(monto < montoUsuario){
        return true;
    }
    return false;
}


//tiene tarjeta el usuario
async function hasCard(usuario){    
    const tarjeta = await userService.hasCard(usuario);
    console.log(tarjeta);
    if(tarjeta == null){
        return false;
    }
    return true;
}

//restar dinero a la tarjeta del usuario
async function substractMoney(usuario, monto){
    await userService.substractCardAmount(usuario,monto);
}

/*--------------------*/
async function modifyRequest(id,request){
    const foundRequest = await Request.findOne({id:id});
    const fechaPedido = foundRequest.fecha_pedido;
    const fechaEntrega = request.fecha_entrega;
    const f1 = new Date(fechaPedido);
    const f2 = new Date(fechaEntrega);
    if(f2 < f1){
        return null;
    }
    foundRequest.fecha_entrega = request.fecha_entrega;
    foundRequest.estado = request.estado;
    const requestModified = await foundRequest.save();
    return requestModified;
}

async function deliverRequest(id){
    const foundRequest = await Request.findOne({id:id});
    foundRequest.estado = 1;
    await foundRequest.save();
}

async function getAll(){
    const requests = await Request.find();
    return requests;
}

async function getById(id){
    const request = await Request.findOne({id:id});
    return request;
}

async function getByUser(dpi){
    const requests = await Request.find({usuario:dpi});
    return requests;
}

async function getInProcess(){
    const request = await Request.find({estado:0});
    return request;
}

async function deleteRequest(id){
    await Request.deleteOne({id:id});
}

async function modifyDeliverDate(idPedido,date){
    const foundRequest = await Request.findOne({id:idPedido});
    console.log(date);
    foundRequest.fecha_entrega = utilities.stringToLocalDate(date);
    console.log(foundRequest);
    const newRequest = await foundRequest.save();
    return newRequest;
}

module.exports = {
    addRequest,
    modifyRequest,
    getAll,
    getById,
    deleteRequest,
    getByUser,
    getInProcess,
    deliverRequest,
    modifyDeliverDate
}