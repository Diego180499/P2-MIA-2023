const express = require("express");
const router = express.Router();
const requestService = require("../service/requestService");

const app = express();
app.use(router);


//peticiones Get
router.get('/getAll',async (req,res)=>{
    const requests = await requestService.getAll();
    res.json(requests);
});

router.get('/find/id/:id',async (req,res)=>{
    const request = await requestService.getById(req.params.id);
    res.json(request);
});


router.get('/getBy/user/:dpi',async (req,res)=>{
    const requests = await requestService.getByUser(req.params.dpi);
    res.json(requests);
});

router.get('/getBy/inProcess',async (req,res)=>{
    const request = await requestService.getInProcess();
    res.json(request);
});

//peticiones POST
router.post('/add', async (req,res)=>{
    const pedido = await requestService.addRequest(req.body)
    if(pedido == 404){
        res.json({
            state:404,
            message:"El usuario no cuenta con tarjeta de crédito para pagar"
        });
        return;
    }

    if(pedido == 400){
        res.json({
            state:400,
            message:"El usuario no cuenta con dinero para realizar la compra"
        });
        return;
    }

    res.json({
        state:201,
        pedido:pedido
    });
});


// peticion PUT
router.put('/modify/state/:id', async (req,res)=>{
    const request = await requestService.modifyRequest(req.params.id,req.body);
    if(request == null){
        res.json({
            message:"La fecha de entrega debe ser mayor o igual a la de entrega"
        });
        return;
    }
    res.json(request);
});

router.put('/deliver',async (req,res)=>{
    await requestService.deliverRequest(req.body.id);
    res.json({
        state:201
    });
});

router.put('/modify/deliverDate',async (req,res)=>{
    await requestService.modifyDeliverDate(req.body.idPedido,req.body.fecha_entrega);
    res.json({
        state:200
    });
});

//peticion DELETE
router.delete('/delete/:id',async (req,res)=>{
    await requestService.deleteRequest(req.params.id);
    res.json({
        message:"Pedido cancelado"
    });
});
module.exports = router;