const express = require("express");
const router = express.Router();
const productService = require('../service/productService');

const app = express();
app.use(router);

//peticiones GET
router.get('/getAll',async (req,res)=>{
    const products = await productService.getAll();
    res.json(products);
});

router.get('/find/id/:id',async (req,res)=>{
    const product = await productService.getBiId(req.params.id);
    res.json(product);
});

router.get('/getBy/user/:dpi',async (req,res)=>{
    const products = await productService.getByUser(req.params.dpi);
    res.json(products);
});

//peticiones POST
router.post('/add', (req,res)=>{
    const product = productService.addproduct(req.body);
    res.json({
        status:201,
        message:"Producto creado",
        producto:product
    });
});

//peticion PUT
router.put('/modify/id/:id',async (req,res)=>{
    const product = await productService.updateProduct(req.params.id,req.body);
    res.json({
        status:201,
        message:"Producto modificado",
        producto:product
    });
});

//peticion DELETE
router.delete('/delete/:id',async (req,res)=>{
    await productService.deleteProduct(req.params.id);
    res.json({
        status:200,
        message:"Producto eliminado"
    });
});


module.exports = router;