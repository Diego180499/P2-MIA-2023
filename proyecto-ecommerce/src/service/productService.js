const Product = require("../repository/productModel");

function addproduct(product){
    const newProduct = new Product(product);
    newProduct.save();
    return newProduct;
}

async function getAll(){
    const products = await Product.find();
    return products;
}

async function getBiId(id){
    const foundProduct = await Product.findOne({id:id});
    return foundProduct;
}

async function updateProduct(id, newProduct){
    const productFound = await Product.findOne({id:id});
    productFound.usuario = newProduct.usuario;
    productFound.nombre = newProduct.nombre;
    productFound.categoria = newProduct.categoria;
    productFound.precio = newProduct.precio;
    const product = await productFound.save();
    return product;
}

async function deleteProduct(id){
    await Product.deleteOne({id:id});
}


//generar numero random para el id de un producto
function getRandomInt() {
    return Math.floor(Math.random() * 9999);
}

module.exports = {
    addproduct,
    getAll,
    getBiId,
    updateProduct,
    deleteProduct
}