const form = document.querySelector("#form");
const linkRegresar = document.querySelector("#link-regresar");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const usuario = document.querySelector("#usuario");
const password = document.querySelector("#password");
const tipo_usuario = document.querySelector("#tipo-usuario");
const dpi = document.querySelector("#dpi");
const botonModificar = document.querySelector("#boton");

//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpiUser = arrayData[0][1];
const dpiModify = arrayData[1][1];

linkRegresar.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/vistas/usuario-admin/empleados.html?dpi="+dpiUser;
});


//obtener usuario
obtenerUsuario();

function obtenerUsuario(){
    const request = new Request("http://localhost:3000/user/find/dpi/"+dpiModify);

    fetch(request)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            llenarForm(response);
        });
}

function llenarForm(empleado){
    nombre.value = empleado.nombre;
    apellido.value = empleado.apellido;
    dpi.value = empleado.dpi;
    usuario.value = empleado.usuario;
    password.value = empleado.password;
}

//modificar usuario
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    realizarSolicitud();
});


function realizarSolicitud(){
    const request = modificarEmpleado();
    fetch(request)
        .then(res => res.json())
        .then(response => {
            //console.log(response);
            alertaSuccess("Empleado modificado");
        });
}

function modificarEmpleado(){
    const empleado = {
        nombre:nombre.value,
        apellido:apellido.value,
        dpi:dpi.value,
        usuario:usuario.value,
        password :password.value,
        tipo_usuario:tipo_usuario.value
    }
    console.log(empleado);
    const request = new Request("http://localhost:3000/user/modify/"+dpiModify,{
        method:"PUT",
        body:JSON.stringify(empleado),
        headers:{
            "Content-Type":"application/json"
        }
    });
    return request;
}


function alertaSuccess(mensaje){
    swal(mensaje,'','success');
}
