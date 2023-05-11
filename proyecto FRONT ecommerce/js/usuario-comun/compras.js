const linkRegresar = document.querySelector("#link-regresar");
const idCarrito = document.querySelector("#id-carrito");
const botonCancelar = document.querySelector("#boton-cancelar");
const botonVer = document.querySelector("#boton-ver");
const contenedorProductos = document.querySelector("#contenedor-productos");


//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];
const idCarritoNuevo = arrayData[1][1];


mostrarIdCarrito();
obtenerProductos();

//realizar la generación de un carrito
function mostrarIdCarrito(){
    idCarrito.innerHTML = "Id Carrito: "+idCarritoNuevo;
}

botonVer.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/detalles-carrito.html?dpi="+dpi+"&idCarrito="+idCarritoNuevo;
});


botonCancelar.addEventListener('click',()=>{
        eliminarCarrito();
});

function eliminarCarrito(){
    const request = new Request("http://localhost:3000/trolley/delete/"+idCarritoNuevo,{
        method:"DELETE",
        body:JSON.stringify({}),
        headers:{
            "Content-Type":"application/json"
        }
    });

    fetch(request)
        .then(res => res.json())
        .then(response => {
            console.log(response);
        });
        window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/index.html?dpi="+dpi;
}



async function obtenerProductos(){
    let contenido = "";
    const request = new Request("http://localhost:3000/products/getAll");
    await fetch(request)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            contenido = mostrarProductos(response);           
        });
    contenedorProductos.innerHTML = contenido;   
}


function mostrarProductos(productos){
    let contenido = ``;

    for(let i=0; i<productos.length; i++){
        contenido += `
        <div class="div-producto">
            <h3>ID Producto : ${productos[i].id}</h3>
            <h3>Nombre: ${productos[i].nombre}</h3>
            <h3>Categoria: ${productos[i].categoria}</h3>
            <h3>Descripción: ${productos[i].descripcion}</h3>
            <h3>Precio: Q.${productos[i].precio}</h3>
            <div class="agregar">
                <a href="http://127.0.0.1:5500/vistas/usuario-comun/agregar-detalle.html?dpi=${dpi}&idCarrito=${idCarritoNuevo}&idProducto=${productos[i].id}" 
                id="agregar">
                Agregar al Carrito
                </a>
            </div>
        </div>`;
    }
    return contenido;
}

