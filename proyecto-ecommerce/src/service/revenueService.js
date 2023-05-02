const Revenue = require("../repository/revenueModel");

function addRevenue(revenue){
    const newRevenue = new Revenue(revenue);
}

async function getAll(){
    const revenues = await Revenue.find();
    return revenues;
}


module.exports = {
    addRevenue,
    getAll
}