const linkRegresar = document.querySelector("#link-regresar");
const numeroTarjeta = document.querySelector("#numero");
const monto = document.querySelector("#monto");
const form = document.querySelector("#form");


//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];
const idCarritoNuevo = arrayData[1][1];

linkRegresar.addEventListener('click',()=>{
    window.location.href=`http://127.0.0.1:5500/vistas/usuario-comun/detalles-carrito.html?dpi=${dpi}&idCarrito=${idCarritoNuevo}`;
});

//agregar tarjeta al sistema
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    agregarTarjeta();
});

function agregarTarjeta(){
    const body = {
        numero:numeroTarjeta.value,
        monto:monto.value
    }

    const request = new Request(`http://localhost:3000/user/addCard/${dpi}`,{
        method:"POST",
        body:JSON.stringify(body),
        headers:{
            "Content-Type":"application/json"
        }    
    });

    fetch(request)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            if(response.state == 201){
                alertaSuccess("Tarjeta añadida al Sistema");
            }
        });
}

//mostrar alertas
async function alertaSuccess(mensaje){
    await swal(mensaje,'','success');
    console.log("Despues de la alerta..");
    window.location.href=`http://127.0.0.1:5500/vistas/usuario-comun/detalles-carrito.html?dpi=${dpi}&idCarrito=${idCarritoNuevo}`;
}


