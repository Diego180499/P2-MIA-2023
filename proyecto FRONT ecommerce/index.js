const botonIngresar = document.querySelector("#boton");
const usuario = document.querySelector("#usuario");
const password = document.querySelector("#password");
const form = document.querySelector("#login");

form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    //peticion a API REST
    const usuarioEncontrado = await verificarUsuario(usuario.value, password.value);
    if(usuarioEncontrado == null){
        alertaError("Usuario y Contraseña no coinciden");
        return;
    }
    //enviamos al usuario a su respectivo portal
    accessUser(usuarioEncontrado.tipo_usuario,usuarioEncontrado.dpi);
});


async function verificarUsuario(usuario, password){
    const request = peticionPost(usuario,password);
    let user = {}
    await fetch(request)
        .then(res => res.json())
        .then(response =>{
            user = response;
    });
    return user;
}


function peticionPost(user,password){
    const body = {
        usuario:user,
        password:password
    }

    const request = new Request('http://localhost:3000/user/login',{
        method:"POST",
        body:JSON.stringify(body),
        headers:{
            'Content-Type':'application/json'
        }
    });
    return request;
}

//enviar a un usuario a su respectivo portal
function accessUser(tipo_usuario,dpi){
    if(tipo_usuario == 3){
        window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/index.html?dpi="+dpi;
    }else if(tipo_usuario == 2){
        window.location.href= "http://127.0.0.1:5500/vistas/usuario-paqueteria/index.html?dpi="+dpi;
    }else if(tipo_usuario == 1){
        window.location.href = "http://127.0.0.1:5500/vistas/usuario-admin/index.html?dpi="+dpi;
    }
}

function alertaError(mensaje){
    swal(mensaje,'','error');
}