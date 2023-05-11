const linkIngresarEmpleado = document.querySelector("#link-ingresar-empleado");
const linkEmpleados = document.querySelector("#link-empleados");
const linkReportes = document.querySelector("#link-reportes");
const linkLogout = document.querySelector("#link-cerras-sesion");
const nombreUsuario = document.querySelector("#nombre-usuario");

//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];

//peticion get para obtener usuario
petigionGet();

function petigionGet(){
    const request = new Request("http://localhost:3000/user/find/dpi/"+dpi);

    fetch(request)
        .then(res => res.json())
        .then(response =>{
            mostrarNombre(response);
        });
}

//mostrando nombre de usuario
function mostrarNombre(usuario){
    nombreUsuario.innerHTML = usuario.nombre+" "+usuario.apellido;
}

linkIngresarEmpleado.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/vistas/usuario-admin/ingresar-empleado.html?dpi="+dpi;
});

linkEmpleados.addEventListener("click",()=>{
    window.location.href= "http://127.0.0.1:5500/vistas/usuario-admin/empleados.html?dpi="+dpi;
});

linkReportes.addEventListener("click",()=>{
    window.location.href= "http://127.0.0.1:5500/vistas/usuario-admin/reportes.html?dpi="+dpi;
});

linkLogout.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/index.html";
});