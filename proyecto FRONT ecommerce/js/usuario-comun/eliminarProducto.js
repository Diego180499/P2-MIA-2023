//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];
const idCarrito = arrayData[1][1];
const idDetalle = arrayData[2][1];


const linkRegresar = "http://127.0.0.1:5500/vistas/usuario-comun/detalles-carrito.html?dpi="+dpi+"&idCarrito="+idCarrito;


eliminarDetalle();

function redireccionar(){
    window.location.href=linkRegresar;
}

function eliminarDetalle(){
    const request = new Request("http://localhost:3000/trolleyDetail/delete/byId/"+idDetalle+"/"+idCarrito,{
        method:"DELETE",
        body:JSON.stringify({}),
        headers:{
            "Content-Type":"application/json"
        }
    });
     fetch(request)
        .then(res => res.json())
        .then(response =>{
            console.log(response);
        });

    redireccionar();
    
}