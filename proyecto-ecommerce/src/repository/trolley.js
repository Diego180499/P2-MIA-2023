const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

let trolleyModel = new Schema({
    id:Number,
    total:Number
});



module.exports = model('carritos',trolleyModel);