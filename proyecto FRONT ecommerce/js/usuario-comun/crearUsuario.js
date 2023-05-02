const form = document.querySelector("#form");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const dpi = document.querySelector("#dpi");
const usuario = document.querySelector("#usuario");
const password = document.querySelector("#password");
const numeroTarjeta = document.querySelector("#numero");
const monto = document.querySelector("#monto");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let bodyUser = {}
    if(numeroTarjeta.value ==''){
         bodyUser = {
            nombre:nombre.value,
            apellido:apellido.value,
            dpi:dpi.value,
            usuario:usuario.value,
            password:password.value,
            tipo_usuario:3
        }
    }else{
         bodyUser = {
            nombre:nombre.value,
            apellido:apellido.value,
            dpi:dpi.value,
            usuario:usuario.value,
            password:password.value,
            tipo_usuario:3,
            tarjeta:{
                numero:numeroTarjeta.value,
                monto:monto.value
            }
        }
    }
    
    agregarUsuario(bodyUser);

});

function agregarUsuario(user){    
    const request = new Request("http://localhost:3000/user/add",{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            "Content-Type":"application/json"
        }
    });

    fetch(request)
        .then(res => res.json())
        .then(response =>{
            console.log(response);
            if(response.state == 201){
                alertaSuccess(response.message);
            }
        });
}

function alertaSuccess(mensaje){
    swal(mensaje,'','success');
}
