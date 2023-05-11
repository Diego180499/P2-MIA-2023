const linkRegresar = document.querySelector("#regresar");
const tabla = document.querySelector("#tabla");
//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];

linkRegresar.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/index.html?dpi="+dpi;
});



//obtener productos
obtenerProductos();

function obtenerProductos(){
    const request = new Request("http://localhost:3000/products/getBy/user/"+dpi);
    
    fetch(request)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            const contenido = llenarTabla(response);
            tabla.innerHTML = contenido;
        });
}

function llenarTabla(productos){
    let contenido = `
        <tr>
            <th>ID Producto</th>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Precio Venta</th>
            <th>Ganancia que Genera</th>
        </tr>
    `;

    for(let i=0; i<productos.length; i++){
        contenido += `
            <tr>
                <th>${productos[i].id}</th>
                <th>${productos[i].nombre}</th>
                <th>${productos[i].categoria}</th>
                <th>Q.${productos[i].precio}</th>
                <th>Q.${generarGanancia(productos[i].precio)}</th>
            </tr>
        `;
    }

    return contenido;
}

function generarGanancia(precio){
    const ganancia = precio*0.95;
    return ganancia;
}