const express = require("express");
const router = express.Router();
const trolleyService = require("../service/trolleyService");

const app = express();
app.use(router);

//peticiones GET
router.get('/find/id/:id',async (req,res)=>{
    const id = req.params.id;
    const trolley = await trolleyService.getById(id);
    res.json({
        trolley:trolley
    });
});

router.get('/getAll',async (req,res)=>{
    const trolleys = await trolleyService.getAll();
    res.json({trolleys});
});

//peticiones POST
router.post('/add',(req,res)=>{
    const newTrolley = trolleyService.addTrolley();
    res.json({
        status:201,
        trolley:newTrolley
    });
});

//peticion PUT
router.put('/modify/:id',async (req,res)=>{
    const trolley = await trolleyService.updateTrolley(req.params.id,req.body);
    res.json({
        status:201,
        trolley:trolley
    });
});

//peticion DELETE
router.delete('/delete/:id',async (req,res)=>{
    await trolleyService.deleteTrolley(req.params.id);
    res.json({
        status:200,
        message:"Carrito cancelado"
    });
});

module.exports = router;