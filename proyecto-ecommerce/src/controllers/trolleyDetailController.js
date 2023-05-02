const express = require("express");
const router = express.Router();
const trolleyDetailService = require("../service/trolleyDetailService");

const app = express();
app.use(router);

//peticion GET
router.get('/find/byTrolley/:idTrolley', async (req,res)=>{
    const trolleyDetails = await trolleyDetailService.getAllByTrolley(req.params.idTrolley);
    res.json(trolleyDetails);
});
//peticion POST
    router.post('/add',async (req,res)=>{
        const trolley = await trolleyDetailService.addTrolleyDetail(req.body);
        res.json({
            "detalle_carrito":trolley
        });
    });

//peticion DELETE
router.delete('/delete/byId/:id/:idTrolley', (req,res)=>{
     trolleyDetailService.deleteById(req.params.id,req.params.idTrolley);
    res.json({state:200,message:"Detalle Eliminado"});
});

router.delete('/delete/byTrolley/:idTrolley',async (req,res)=>{
    await trolleyDetailService.deleteByTrolley(req.params.idTrolley);
    res.json({state:200,message:"Detalles Eliminados"});
});



module.exports = router;