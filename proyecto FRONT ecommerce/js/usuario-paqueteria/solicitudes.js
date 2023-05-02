const linkRegresar = document.querySelector("#link-regresar");
const contenedorSolicitudes = document.querySelector("#contenedor-solicitudes");
const idProducto = document.querySelector("#idProducto");
const idSolicitud = document.querySelector("#id-solicitud");
const tabla = document.querySelector("#tabla");

//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];

linkRegresar.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-paqueteria/index.html?dpi="+dpi;
});

solicitudGet();

async function solicitudGet(){
    const request = new Request('http://localhost:3000/productRequest/find/noAccepted');
    await fetch(request)
        .then(res => res.json())
        .then(response =>{
            console.log(response);
            llenarTabla(response);
        });
}

function llenarTabla(solicitudes){
    let contenido = "<tr><th>Id Solicitud</th><th>Id Producto</th><th>Dueño</th><th>Producto</th><th>Categoria</th><th>Precio</th><th>-</th></tr>";
    for(let i=0; i<solicitudes.length; i++){
        contenido += `
        <tr><td>${solicitudes[i].id}</td>
        <td>${solicitudes[i].producto.id}</td>
        <td>${solicitudes[i].producto.usuario}</td>
        <td>${solicitudes[i].producto.nombre}</td>
        <td>${solicitudes[i].producto.categoria}</td>
        <td>${solicitudes[i].producto.precio}</td>
        <td><a href='http://127.0.0.1:5500/vistas/usuario-paqueteria/solicitud.html?dpi=${dpi}&id=${solicitudes[i].id}' class="ver-solicitud">Ver Solicitud</a></td>
        </tr>
        `;
    }
    tabla.innerHTML = contenido;
}


//enviar datos
