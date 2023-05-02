//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];
const idCarritoNuevo = arrayData[1][1];
const idProducto = arrayData[2][1];


const linkRegresar = "http://127.0.0.1:5500/vistas/usuario-comun/compras.html?dpi="+dpi+"&idCarrito="+idCarritoNuevo;

agregarDetalle();

function agregarDetalle(){
    const body = {
        id:0,
        carrito:idCarritoNuevo,
        producto:idProducto,
        total:0
    }

console.log(body);

    const request = new Request("http://localhost:3000/trolleyDetail/add",{
        method:"POST",
        body:JSON.stringify(body),
        headers:{
            "Content-Type":"application/json"
        }
    });

    fetch(request)
        .then(res => res.json())
        .then(response => {
            window.location.href = linkRegresar;
        });
}



