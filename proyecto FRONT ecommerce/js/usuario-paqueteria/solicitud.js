const linkRegresar = document.querySelector("#link-regresar");
const contenedorSolicitud = document.querySelector("#contenedor-solicitud");

//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];
const idSolicitud = arrayData[1][1];

linkRegresar.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-paqueteria/solicitudes.html?dpi="+dpi;
});



obtenerSolicitud();

function obtenerSolicitud(){
    const request = new Request("http://localhost:3000/productRequest/find/id/"+idSolicitud);
     fetch(request)
        .then(res => res.json())
        .then(response => {
            contenedorSolicitud.innerHTML = mostrarSolicitud(response);
            //accion de botones
            const botonAceptar = document.querySelector("#aceptar");
            const botonRechazar = document.querySelector("#rechazar");
            botonAceptar.addEventListener('click',()=>{
                aceptarProducto();
            });
            botonRechazar.addEventListener('click',()=>{
                declineProduct();
            });
        });
}


//acpetar un producto

function aceptarProducto(){
 const request = new Request("http://localhost:3000/productRequest/acceptRequest",{
    method:"POST",
    body:JSON.stringify({idSolicitud:idSolicitud}),
    headers:{
        "Content-Type":"application/json"
    }
 });

 fetch(request)
    .then(res => res.json())
    .then(response =>{
        console.log(response);
        alertaSucces("Solicitud Aceptada");
    });
}


//rechazar producto
function declineProduct(){
    const request = new Request("http://localhost:3000/productRequest/declineRequest",{
       method:"POST",
       body:JSON.stringify({idSolicitud:idSolicitud}),
       headers:{
           "Content-Type":"application/json"
       }
    });
   
    fetch(request)
       .then(res => res.json())
       .then(response =>{
           console.log(response);
           alertaError(response.message);
       });
   }

function mostrarSolicitud(solicitud){
    let contenidoSolicitud = `
    <div class="solicitud">
        <div>
            <label>ID Solicitud</label>
            <p>${solicitud.id}</p>
        </div>
        <div>
            <label>ID Producto</label>
            <p>${solicitud.producto.id}</p>
        </div>
        <div>
            <label>Dueño</label>
            <p>${solicitud.producto.usuario}</p>
        </div>
        <div>
            <label>Nombre Producto</label>
            <p>${solicitud.producto.nombre}</p>
        </div>
        <div>
            <label>Categoría</label>
            <p>${solicitud.producto.categoria}</p>
        </div>
        <div>
            <label>Descripción</label>
            <p>${solicitud.producto.descripcion}</p>
        </div>
        <div>
            <label>Precio</label>
            <p>Q.${solicitud.producto.precio}</p>
        </div>
        <button class="aceptar" id="aceptar">Aceptar</button>
        <button class="rechazar" id="rechazar">Rechazar</button>
    </div>
    `;

    return contenidoSolicitud;
}


function alertaError(mensaje){
    swal(mensaje,'','error');
}

function alertaSucces(mensaje){
    swal(mensaje,'','success');
}