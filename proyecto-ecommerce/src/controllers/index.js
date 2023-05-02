const usuarioController = require("./userController");
const productoController = require("./productController");
const productCateogryController = require('../controllers/productCategoryController');
const productRequestController = require('./productRequestController');
const trolleyController = require('../controllers/trolleyController');
const trolleyDetailController = require("../controllers/trolleyDetailController");
const requestController = require("../controllers/requestController");
const revenueController = require("../controllers/revenueController");

/* Aquí irán todas las peticiones iniciales a mis controladores,
esta funcion se comunica con el server*/
const routes = function(server){
    server.use('/user',usuarioController);
    server.use('/products',productoController);
    server.use('/productCategory',productCateogryController);
    server.use('/productRequest',productRequestController);
    server.use('/trolley',trolleyController);
    server.use('/trolleyDetail',trolleyDetailController);
    server.use('/request',requestController);
    server.use('/revenue',revenueController);
}

module.exports = routes;