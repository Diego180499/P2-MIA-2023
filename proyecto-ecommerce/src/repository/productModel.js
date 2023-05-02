const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const Usuario = require('./userModel');

let productModel = new Schema({
    id:Number,
    usuario:String,
    nombre:String,
    descripcion:String,
    categoria:String,
    precio:Number,
    imagen:String
});

productModel = new Schema({
    id:Number,
    usuario:String,
    nombre:String,
    descripcion:String,
    categoria:String,
    precio:Number
});

module.exports = model('productos',productModel);