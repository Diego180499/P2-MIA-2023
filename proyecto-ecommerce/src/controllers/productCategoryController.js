const express = require("express");
const router = express.Router();
const productCategoryService = require('../service/productCategoryService');

const app = express();
app.use(router);

//peticiones GET
router.get('/getAll',async (req,res)=>{
    const categories = await productCategoryService.getAll();
    res.json(categories);
});

//peticion POST
router.post('/add',async (req,res)=>{
    const category = await productCategoryService.addCategory(req.body);
    res.json(category);
});


module.exports = router;