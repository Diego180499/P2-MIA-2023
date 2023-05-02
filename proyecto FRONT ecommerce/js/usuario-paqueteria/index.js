const linkSolicitudes = document.querySelector("#link-solicitudes");
const linkPedidos = document.querySelector("#link-pedidos");
const linkLogout = document.querySelector("#link-cerras-sesion");
const nombreUsuario = document.querySelector("#nombre");

//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];



linkSolicitudes.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-paqueteria/solicitudes.html?dpi="+dpi;
});

linkPedidos.addEventListener("click",()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-paqueteria/pedidos.html?dpi="+dpi;
});

linkLogout.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/index.html";
});

//mostrar usuario
const request = new Request('http://localhost:3000/user/find/dpi/'+dpi);
fetch(request)
    .then(res => res.json())
    .then(usuario =>{
        console.log(usuario)
        mostrarUsuario(usuario.nombre,usuario.apellido);
    });

function mostrarUsuario(nombre,apellido){
    nombreUsuario.innerHTML = nombre+" "+apellido;
}