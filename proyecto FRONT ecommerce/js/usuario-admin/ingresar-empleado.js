const linkRegresar = document.querySelector("#link-regresar");
const form = document.querySelector("#form");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const dpi = document.querySelector("#dpi");
const usuario = document.querySelector("#usuario");
const password = document.querySelector("#password");
const tipoUsuario = document.querySelector("#tipo-usuario");

//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpiUser = arrayData[0][1];


linkRegresar.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/vistas/usuario-admin/index.html?dpi="+dpiUser;
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const request = agregarEmpleado();
    fetch(request)
        .then(res => res.json())
        .then(response =>{
            console.log(response);
            alertaSuccess("Empleado creado");
        });

});

function agregarEmpleado(){
    const empleado = {
        nombre:nombre.value,
        apellido:apellido.value,
        dpi:dpi.value,
        usuario:usuario.value,
        password:password.value,
        tipo_usuario:tipoUsuario.value
    }
    const request = new Request("http://localhost:3000/user/add",{
        method:"POST",
        body:JSON.stringify(empleado),
        headers:{
            "Content-Type":"application/json"
        }
    });

    return request;
}



function alertaError(mensaje){
    swal(mensaje,'','error');
}

function alertaSuccess(mensaje){
    swal(mensaje,'','success');
}
