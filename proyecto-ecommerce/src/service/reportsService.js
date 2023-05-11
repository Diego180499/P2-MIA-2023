const Product = require("../repository/productModel");
const Request = require("../repository/request");
const Trolley_Detail = require("../repository/trolleyDetail");

async function mostSelledProducts(){
    const report = await Trolley_Detail.aggregate([{$group : {_id:"$producto", productosVendidos : {$sum : 1 }}},{$limit : 10}, {$sort : { productosVendidos : -1 }}]);
    console.log(report);
    return report;
}

async function clientsWithMostPurchases(){
    const report = await Request.aggregate([{$group:{_id:"$usuario",gananciasGeneradas:{$sum : "$ganancia"}}},{$limit:10},{$sort:{gananciasGeneradas : -1}}])
    return report;
}

async function clientWithMostRequest(){
    const report = await Request.aggregate([{$group : {_id:"$usuario",pedidos : {$sum : 1 }}},{$limit:10},{$sort:{pedidos : -1}}])
    return report;
}

function clientWithMostProducts(){
    const report = Product.aggregate([{$group : {_id:"$usuario",productos : {$sum : 1 }}},{$limit:10},{$sort:{productos : -1}}])
    return report;
}

module.exports = {
    mostSelledProducts,
    clientsWithMostPurchases,
    clientWithMostRequest,
    clientWithMostProducts
}