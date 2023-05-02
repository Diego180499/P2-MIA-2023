//generar numero random para el id de un producto
function getRandomInt() {
    return Math.floor(Math.random() * 9999);
}

function getActualDate(){
    const fecha = new Date();
    return fecha.toLocaleDateString();
}

function getFutureDate(days){
    const fecha = new Date();
    fecha.setDate(fecha.getDate()+days);
    return fecha.toLocaleDateString();
}

module.exports = {
    getRandomInt,
    getActualDate,
    getFutureDate
}