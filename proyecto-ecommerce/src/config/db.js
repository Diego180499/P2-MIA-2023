const mongoose = require("mongoose");

const mongodb_uri = "mongodb://127.0.0.1:27017/ecommerce";

async function connectDB(){
    try {
        const db = await mongoose.connect(mongodb_uri, {
        useNewUrlParser: true,
        useUnifiedTopology : true
        });
        console.log("SUCCESFULY CONECCTION TO "+db.connection.name);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;
