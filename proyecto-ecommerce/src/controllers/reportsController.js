const express = require("express");
const router = express.Router();
const reportService = require("../service/reportsService");

const app = express();
app.use(router);


router.get("/firstReport",async (req,res)=>{
    const report = await reportService.mostSelledProducts();
    res.json({report});
});

router.get("/secondReport",async (req,res)=>{
    const report = await reportService.clientsWithMostPurchases();
    res.json({report});
});

router.get("/quarterReport",async (req,res)=>{
    const report = await reportService.clientWithMostRequest();
    res.json({report});
});

router.get("/fifthReport",async (req,res)=>{
    const report = await reportService.clientWithMostProducts();
    res.json(report);
});

module.exports = router;