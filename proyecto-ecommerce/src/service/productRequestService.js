const ProductRequest = require("../repository/productRequest");
const Product = require("../repository/productModel");
const productService = require("../service/productService");
function addRequest(request){
    request.id = getRandomInt();
    const idProductRequest = getRandomInt();
    const productRequest = {
        id:idProductRequest,
        producto:request,
        estado:2
    }
    const newRequest = new ProductRequest(productRequest); 
    return newRequest.save();
}

async function getAll(){
    const products = await ProductRequest.find();
    return products;
}

async function getNoAccepted(){
    const requests = await ProductRequest.find({estado:2});
    return requests;
}

async function getById(id){
    const productRequest = await ProductRequest.findOne({id:id});
    return productRequest;
}

async function acceptRequest(idSolicitud){
    const foundRequest = await ProductRequest.findOne({id:idSolicitud});
    foundRequest.estado = 1;
    await foundRequest.save();
    //obtenemos el producto solicitado para agregarlo a la db
    const producto = foundRequest.producto;
    console.log(producto);
    const newProduct = await productService.addproduct(producto);
    return newProduct;
}

async function declineRequest(idSolicitud){
    const foundRequest = await ProductRequest.findOne({id:idSolicitud});
    foundRequest.estado = 0;
    await foundRequest.save();
}


//generar numero random para el id de un producto
function getRandomInt() {
    return Math.floor(Math.random() * 9999);
}

module.exports = {
    addRequest,
    getAll,
    getById,
    acceptRequest,
    getNoAccepted,
    declineRequest
}