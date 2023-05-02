const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

let revenueModel = new Schema({
    usuario:Number,
    ganancia:Number
});

module.exports = model('ganancias',revenueModel);