const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const Product = require("./productModel");


let productRequestModel = new Schema({
    id:Number,
    producto: {
        id:Number,
        usuario:String,
        nombre:String,
        descripcion:String,
        categoria:String,
        precio:Number
    },
    estado:Number //esto indica si el producto fue rechazado o aceptado a ventas
});

productRequestModel = new Schema({
    id:Number,
    producto: {
        id:Number,
        usuario:String,
        nombre:String,
        descripcion:String,
        categoria:String,
        precio:Number,
        imagen:String
    },
    estado:Number
});



module.exports = model("solicitudes",productRequestModel);