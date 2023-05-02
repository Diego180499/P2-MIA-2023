const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

let productCategoryModel = new Schema({
    nombre:String
});


module.exports = model('categoria_productos',productCategoryModel);
