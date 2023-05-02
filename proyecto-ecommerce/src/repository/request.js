const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const User = require('./userModel');
const Trolley = require("./trolley");

let requestModel = new Schema({
    id:Number,
    usuario:String,  //cliente comprador, usuario tipo común.
    carrito:Number,
    fecha_pedido:String,
    fecha_entrega:String,
    estado:Number,
    ganancia:Number
});

module.exports = model('pedidos',requestModel);