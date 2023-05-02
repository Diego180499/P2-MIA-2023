const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

let userModel = new Schema({
    nombre:String,
    apellido:String,
    dpi:String,
    usuario:String,
    password:String,
    tipo_usuario:Number
});

userModel = new Schema({
    nombre:String,
    apellido:String,
    dpi:String,
    usuario:String,
    password:String,
    tipo_usuario:Number,
    tarjeta:{
        numero:Number,
        monto:Number
    }
});

module.exports = model("usuarios",userModel);