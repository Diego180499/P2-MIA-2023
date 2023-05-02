const linkRegresar = document.querySelector("#link-regresar");
const form = document.querySelector("#form");
const nombre = document.querySelector("#nombre");
const categoria = document.querySelector("#categoria");
const precio = document.querySelector("#precio");
const descripcion = document.querySelector("#descripcion");

//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];

//obtener datos
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const usuario = dpi;
    const nombreProducto = nombre.value;
    const descripcionProducto = descripcion.value;
    const categoriaProducto = categoria.value;
    const precioProducto = precio.value;
    
    const producto = {
        usuario,
        nombre:nombreProducto,
        descripcion:descripcionProducto,
        categoria:categoriaProducto,
        precio:precioProducto
    }

    enviarSolicitud(producto);
});

//solicitud POST a la API para crear una SOLICITUD
function enviarSolicitud(producto){
    const request = solicitudPost(producto);
    fetch(request)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            if(response.state == 201){
                alerta("Solicitud a Paquetería Enviada");
            }
        });
}


function solicitudPost(producto){
    const request = new Request("http://localhost:3000/productRequest/add",{
        method:"POST",
        body:JSON.stringify(producto),
        headers:{
            "Content-Type":"application/json"
        }
    });
    return request;
}


linkRegresar.addEventListener("click",()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/index.html?dpi="+dpi;
});


function alerta(mensaje){
    swal(mensaje,'','success');
}