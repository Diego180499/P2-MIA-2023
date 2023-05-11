const tabla = document.querySelector("#tabla");
const total = document.querySelector("#total");
const linkRegresar = document.querySelector("#link-regresar");
const botonPagar = document.querySelector("#boton-pagar");
const linkTarjeta = document.querySelector("#link-tarjeta");
const fechaPedido = document.querySelector("#fechaPedido");

//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];
const idCarritoNuevo = arrayData[1][1];

linkRegresar.addEventListener("click",()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/compras.html?dpi="+dpi+"&idCarrito="+idCarritoNuevo;
});

peticionDetalles();

 function peticionDetalles(){
    const request = new Request("http://localhost:3000/trolleyDetail/find/byTrolley/"+idCarritoNuevo);
     fetch(request)
        .then(res => res.json())
        .then( (response) =>{
            console.log(response);
             llenarTabla(response);
             mostrarTotal();
        });
}

async function llenarTabla(detalles){
    let contenido = `<tr>
        <th>Producto</th>
        <th>Precio Unidad</th>
        <th>-</th>
    </tr>`;

    for(let i=0; i<detalles.length; i++){
        let producto = await obtenerProducto(detalles[i].producto);
        console.log(producto);
        contenido += `<tr>
            <td>${producto.nombre}</td>
            <td>${detalles[i].total}</td>
            <td>
            <a class="boton-eliminar" id="boton" href="http://127.0.0.1:5500/vistas/usuario-comun/eliminar-producto.html?dpi=${dpi}&idCarrito=${idCarritoNuevo}&idDetalle=${detalles[i].id}">
            Eliminar
            </a>
            </td>
        </tr>`;
    }

    tabla.innerHTML = contenido;
}

async function obtenerProducto(idproducto){
    let producto = {};
    const request = new Request("http://localhost:3000/products/find/id/"+idproducto);
    await fetch(request)
        .then(res => res.json())
        .then( response =>{
            producto =  response;
            //console.log(producto);
        });
    return producto;
}


function mostrarTotal(){
    const request = new Request("http://localhost:3000/trolley/find/id/"+idCarritoNuevo);

    fetch(request)
        .then(res => res.json())
        .then(response =>{
            console.log(response);
            total.innerHTML= `Total = Q.${response.trolley.total}`;
        });
}

//REALIZAR UN PEDIDO
botonPagar.addEventListener('click',()=>{
    const request = realizarPedido();
    realizarSolicitud(request);
}
);

function realizarPedido(){
    const body = {
        id:0,
        usuario:dpi,
        carrito:idCarritoNuevo,
        fecha_pedido:fechaPedido.value,
        fecha_entrega:"0",
        ganancia:0
    }

    const request = new Request("http://localhost:3000/request/add",{
        method:"POST",
        body:JSON.stringify(body),
        headers:{
            "Content-Type":"application/json"
        }
    });

    return request;
}

function realizarSolicitud(request){
     fetch(request)
    .then(res => res.json())
    .then(response => {
        console.log(response)
        if(response.state == 400){
            alertaError(response.message,`http://127.0.0.1:5500/vistas/usuario-comun/detalles-carrito.html?dpi=${dpi}&idCarrito=${idCarritoNuevo}`);
            return;
        }else if(response.state == 404){
            alertaError(response.message,"http://127.0.0.1:5500/vistas/usuario-comun/crear-tarjeta.html?dpi="+dpi+"&idCarrito="+idCarritoNuevo);
            return;
        }else if(response.state == 201){
            alertaSuccess("Su pedido será entregado en esta fecha: "+response.pedido.fecha_entrega);                            
        }
    });
}


//ir a ingresar la tarjeta

linkTarjeta.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/crear-tarjeta.html?dpi="+dpi+"&idCarrito="+idCarritoNuevo;
});


//mostrar alertas
async function alertaSuccess(mensaje){
    await swal(mensaje,'','success');
    console.log("Despues de la alerta..");
    window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/index.html?dpi="+dpi;
}

async function alertaError(mensaje, link){
    await swal(mensaje,'','error');
    window.location.href=link;
}