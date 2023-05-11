const express = require("express");
const router = express.Router();
const userService = require("../service/userService");

const app = express();
app.use(router);


//peticiones GET
router.get('/getAll',async (req,res)=>{
    const users = await userService.getAll();
    console.log(req.query.nombre);
    res.json(users);
});

router.get('/find/dpi/:dpi',async (req,res)=>{
    const user = await userService.getByDpi(req.params.dpi);
    if(user == null){
        res.json({
            state:404,
            message:"El usuario con el dpi "+req.params.id+" no ha sido encontrado"});
    }else{
        res.json(user);
    }
});

router.get('/hasCard/:dpi',async (req,res)=>{
    const card = await userService.hasCard(req.params.dpi);
    if(card == null){
        res.json({
            message:"no tiene tarjeta"
        });
        return;
    }
    res.json({
        tarjeta:card
    });
});

router.get('/find/employees',async (req,res)=>{
     const employees = await userService.getEmployeeUsers();
     res.json(employees);
});

//peticiones POST
router.post('/login',async (req,res)=>{
    const user = req.body.usuario;
    const password = req.body.password;
    const foundUser = await userService.getByUserPassword(user,password);
    res.json(foundUser);// diego diego1234
});



router.post("/add",(req,res)=>{
    const user = userService.addUser(req.body);
    res.json({
        state:201,
        message:"Creado exitosamente",
        newUser : user
    });
});

router.post('/addCard/:dpi',async (req,res)=>{
    const card = req.body;
    const usuario = req.params.dpi;
    const user = await userService.saveCard(usuario,card);
    res.json({
        state:201,
        user:user
    });
});

// peticiones PUT
router.put('/modify/:id',async (req,res)=>{
    const newUser = await userService.updateUser(req.params.id, req.body);
    console.log(req.params.id);
    if(newUser == null){
        res.json({
            state:404,
            message:"El usuario con el dpi "+req.params.id+" no ha sido encontrado"});
    }else{
        res.json(newUser);
    }
});

router.put('/increaseCardAmount',async (req,res)=>{
    await userService.increaseCardAmount(req.body.dpi,req.body.monto);
    res.json({
        state:200
    });
});


//peticiones DELETE
router.delete('/delete/:dpi',async (req,res)=>{
    const dpi = req.params.dpi;
    await userService.deleteUser(dpi);
    res.json({
        status:200,
        message:"Usuario eliminado"
    });
});

module.exports = router;
