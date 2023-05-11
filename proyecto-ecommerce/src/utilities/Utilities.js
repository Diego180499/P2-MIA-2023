//generar numero random para el id de un producto
function getRandomInt() {
    return Math.floor(Math.random() * 9999);
}

function getActualDate(){
    const fecha = new Date();
    return fecha.toLocaleDateString();
}

function getFutureDate(fechaInicial, days){
    const fecha = new Date(fechaInicial);
    fecha.setDate(fecha.getDate()+days);
    return fecha.toLocaleDateString();
}

function stringToLocalDate(fecha){
    const nuevaFecha = new Date(fecha);
    console.log("**********"+nuevaFecha.getDay());
    nuevaFecha.setDate(nuevaFecha.getDate()+1);
    return nuevaFecha.toLocaleDateString();
}

module.exports = {
    getRandomInt,
    getActualDate,
    getFutureDate,
    stringToLocalDate
}