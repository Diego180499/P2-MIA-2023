const Trolley = require("../repository/trolley");
const utilities = require('../utilities/Utilities');


function addTrolley(){
    const idTrolley = utilities.getRandomInt();
    let product = {
        id:idTrolley,
        total:0
    }

    const newTrolley = new Trolley(product);
    newTrolley.save();
    return newTrolley;
}

async function getAll(){
    const trolleys = await Trolley.find();
    return trolleys;
}

async function getById(id){
    const trolley = await Trolley.findOne({id:id});
    return trolley;
}

async function updateTrolley(id, trolley){
    const foundTrolley = await Trolley.findOne({id:id});
    foundTrolley.total = trolley.total;
    const newTrolley = await foundTrolley.save();
    return newTrolley;
}

async function getTotalTrolley(id){
    const foundTrolley = await Trolley.findOne({id:id});
    const total = foundTrolley.total;
    return total;
}

async function updateTotalTrolley(id, newTotal){
    const foundTrolley = await Trolley.findOne({id:id});
    foundTrolley.total = newTotal;
    const trolley = await foundTrolley.save();
    return trolley;
}

async function deleteTrolley(id){
    await Trolley.deleteOne({id:id});
    //await trolleyDetailService.deleteByTrolley(id);
}


module.exports = {
    addTrolley,
    getAll,
    getById,
    updateTrolley,
    deleteTrolley,
    getTotalTrolley,
    updateTotalTrolley
}