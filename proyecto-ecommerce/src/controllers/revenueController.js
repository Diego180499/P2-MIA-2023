const express = require("express");
const router = express.Router();
const revenueService = require("../service/revenueService");

const app = express();
app.use(router);

//peticiones GET
router.get('/getAll',async (req,res)=>{
    const revenues = await revenueService.getAll();
    res.json(revenues);
});

//peticiones POST
router.post('/add', (req,res)=>{
    const revenue = req.body;
    const newRevenue =  revenueService.addRevenue(revenue);
    res.json({
        state:201
    });
});

module.exports = router;