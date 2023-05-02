const express = require("express");
const router = require("./src/controllers/index");
const database = require("./src/config/db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
router(app);

database();

/*servidor*/
app.listen(3000)
console.log("Escuchando en el puerto 3000");

