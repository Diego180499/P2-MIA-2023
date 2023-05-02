const TrolleyDetail = require("../repository/trolleyDetail");
const utilities = require("../utilities/Utilities");
const productService = require("./productService");
const trolleyService = require('./trolleyService');


async function addTrolleyDetail(trolleyDetail){
    const idDetail = utilities.getRandomInt();
    trolleyDetail.id = idDetail;
    const product = await productService.getBiId(trolleyDetail.producto);
    const total = product.precio;
    trolleyDetail.total = total;
    const trolley = new TrolleyDetail(trolleyDetail);
    const newTrolley = await trolley.save();
    //modificamos el total del carrito
    const totalTrolley = await trolleyService.getTotalTrolley(trolleyDetail.carrito);
    trolleyService.updateTotalTrolley(trolleyDetail.carrito,totalTrolley+total);
    return newTrolley;
};

async function getAllByTrolley(idTrolley){
    const trolleyDetails = await TrolleyDetail.find({carrito:idTrolley});
    return trolleyDetails;
}

async function deleteById(id,idTrolley){
    const trolley = await trolleyService.getById(idTrolley);
    console.log(trolley);
    const trolleyDetail = await TrolleyDetail.findOne({id:id});
    const priceDetail = trolleyDetail.total;
    const totalTrolley = trolley.total;
    const newTotal = totalTrolley-priceDetail;
    trolleyService.updateTotalTrolley(idTrolley,newTotal);
    await TrolleyDetail.deleteOne({id:id});
}

async function deleteByTrolley(idTrolley){
    await TrolleyDetail.deleteMany({carrito:idTrolley});
    await trolleyService.updateTotalTrolley(idTrolley,0);
}

module.exports = {
    addTrolleyDetail,
    getAllByTrolley,
    deleteById,
    deleteByTrolley
}