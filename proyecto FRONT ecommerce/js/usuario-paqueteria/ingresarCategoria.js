const linkRegresar = document.querySelector("#link-regresar");
const boton = document.querySelector("#boton");
const categoria = document.querySelector("#categoria");
const form = document.querySelector("#form");

//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];

linkRegresar.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-paqueteria/index.html?dpi="+dpi;
});


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const request = solicitidPost();

    fetch(request)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            alertaSuccess('Categoria añadida');
        });
    

});

function solicitidPost(){
    body = {
        nombre:categoria.value
    }

    const request = new Request("http://localhost:3000/productCategory/add",{
        method:"POST",
        body:JSON.stringify(body),
        headers:{
            "Content-Type":"application/json"
        }
    })

    return request;
}




//alerta
function alertaSuccess(mensaje){
    swal(mensaje,'','success');
}




