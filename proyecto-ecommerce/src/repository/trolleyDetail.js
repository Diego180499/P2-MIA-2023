const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const Product = require("./productModel");

let trolleyDetailModel = new Schema({
    id:Number,
    carrito:Number,
    producto:String,
    total:Number
});

module.exports = model('detalle_carritos',trolleyDetailModel);