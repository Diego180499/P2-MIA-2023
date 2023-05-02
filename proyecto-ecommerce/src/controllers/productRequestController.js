const express = require("express");
const router = express.Router();
const productRequestService = require('../service/productRequestService');

const app = express();
app.use(router);

//peticiones GET
router.get('/getAll',async (req,res)=>{
    const products = await productRequestService.getAll();
    res.json(products);
});

router.get('/find/noAccepted',async (req,res)=>{
    const requests = await productRequestService.getNoAccepted();
    res.json(requests);
});

router.get('/find/id/:id',async (req,res)=>{
    const producRequest = await productRequestService.getById(req.params.id);
    res.json(producRequest);
});

//peticiones POST
router.post('/add',(req,res)=>{
    const newRequest = productRequestService.addRequest(req.body);
    res.json({
        state:201,
        producto:newRequest
    });
});

router.post('/acceptRequest',async (req,res)=>{
    const acceptedProduct = await productRequestService.acceptRequest(req.body.idSolicitud);
    res.json(acceptedProduct);
});

router.post('/declineRequest',async (req,res)=>{
    await productRequestService.declineRequest(req.body.idSolicitud);
    res.json({
        message:"Solicitud Rechazada"
    });
});


module.exports = router;