const ProductCategory = require('../repository/productCategory');

async function addCategory(category){
    const categoryFound = await ProductCategory.findOne({nombre:category.nombre});
    if(categoryFound == null){
        const newCategory = new ProductCategory(category);
        newCategory.save(category);
        return {status:201,message:"Cateogria añadida"}
    }else{
        return {status:401,message:"La categoria "+category.nombre+" ya existe"}
    }
}


async function getAll(){
    const categories = await ProductCategory.find();
    return categories;
}

module.exports = {
    addCategory,
    getAll
}