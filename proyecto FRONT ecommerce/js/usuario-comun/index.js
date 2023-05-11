const linkVender = document.querySelector("#link-vender");
const linkLogout = document.querySelector("#link-cerras-sesion");
const linkCarrito = document.querySelector("#link-carrito");
const linkPedidos = document.querySelector("#link-pedidos");
const linkPerfil = document.querySelector("#perfil");
const linkProductos = document.querySelector("#link-productos");

const nombreUsuario = document.querySelector("#nombre-usuario");

//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];

linkVender.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/form-producto.html?dpi="+dpi;
});

linkLogout.addEventListener("click",()=>{
    window.location.href="http://127.0.0.1:5500/index.html";
});

//crear carrito
linkCarrito.addEventListener('click',()=>{
    crearCarrito();
});

linkPedidos.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/pedidos.html?dpi="+dpi;
});

linkPerfil.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/perfil.html?dpi="+dpi;
});

linkProductos.addEventListener("click",()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/mis-productos.html?dpi="+dpi; 
});


//*******/
const request = new Request('http://localhost:3000/user/find/dpi/'+dpi);
fetch(request)
    .then(res => res.json())
    .then(usuario =>{
        console.log(usuario)
        mostrarUsuario(usuario.nombre,usuario.apellido);
    });

function mostrarUsuario(nombre,apellido){
    nombreUsuario.innerHTML = "Bienvenido a eCommerceGT<br>"+nombre+" "+apellido;
}



//creacion de carrito
function crearCarrito(){
    const request = new Request("http://localhost:3000/trolley/add",{
        method:"POST",
        body:JSON.stringify({}),
        headers:{
            "Content-Type":"application/json"
        }
    });

    fetch(request)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            const idCarrito = response.trolley.id;
            window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/compras.html?dpi="+dpi+"&idCarrito="+idCarrito;
        });
}
