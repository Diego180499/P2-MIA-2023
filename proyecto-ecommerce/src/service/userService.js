const User = require("../repository/userModel");

function addUser(user){
    const newUser = new User(user);
    newUser.save();
    return newUser;
}

async function getAll(){
    const users = await User.find();
    //console.log(users);
    return users;
}

async function getByDpi(userDpi){
    let user = await User.findOne({dpi:userDpi});
    if(user == null){
        return null;
    }
    return user;
}

async function updateUser(dpi, userFound){
    //obtenemos usuario
    let user = await getByDpi(dpi);
    if(user == null){
        return null;
    }
    //modificamos valores de usuario
    user.nombre = userFound.nombre;
    user.apellido = userFound.apellido;
    user.dpi = userFound.dpi;
    user.usuario = userFound.usuario;
    user.password = userFound.password;
    user.tipo_usuario = userFound.tipo_usuario;
    //guardamos cambios
    const newUser = await user.save();
    return newUser;
}

//obtener por usuario y contraseña
async function getByUserPassword(user,password){
    const foundUser = await User.findOne({
        usuario:user,
        password:password
    });
    return foundUser;
}

async function deleteUser(dpiUser){
    await User.deleteOne({dpi:dpiUser});
}


//utilidades de un usuario
async function hasCard(dpi){
    console.log("*-*-*-*-*-*-*-*-"+dpi);
    const usuario = await User.findOne({dpi:dpi});
    const tarjeta = usuario.tarjeta;
    if(tarjeta.numero == undefined){
        return null;
    }
    return tarjeta;
}

//guardar tarjeta a usuario que aun no la tenga registrada
async function saveCard(usuario, card){
    const foundUser = await User.findOne({dpi:usuario});
    foundUser.tarjeta = card;
    await foundUser.save();
    return foundUser;
}

//cosas sobre la TARJETA
async function getCardAmount(dpi){
    console.log("*-*-*-*-*-*-*-*-*-*-"+dpi);
    const usuario = await getByDpi(dpi);
    const amount = usuario.tarjeta.monto;
    return amount;
}

async function substractCardAmount(dpi,amount){
    const actualAmount = await getCardAmount(dpi);
    const newAmount = actualAmount-amount;
    const usuario = await User.findOne({dpi:dpi});
    usuario.tarjeta.monto = newAmount;
    await usuario.save();
}

async function increaseCardAmount(dpi,amount){
    const actualAmount = await getCardAmount(dpi);
    const newAmount = actualAmount+amount;
    const usuario = await User.findOne({dpi:dpi});
    usuario.tarjeta.monto = newAmount;
    await usuario.save();
}

//obtener usuarios empleados
async function getEmployeeUsers(){
    const employess = await User.find({$or:[{tipo_usuario:2},{tipo_usuario:1}]});
    return employess;
}


module.exports ={
    addUser,
    getAll,
    getByDpi,
    updateUser,
    deleteUser,
    hasCard,
    getByUserPassword,
    saveCard,
    getCardAmount,
    substractCardAmount,
    increaseCardAmount,
    getEmployeeUsers
}