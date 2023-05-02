const linkRegresar = document.querySelector("#link-regresar");
const divPedido = document.querySelector("#pedido");
const fechaEntrega = document.querySelector("#fecha");
const form = document.querySelector("#form");
//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];
const idPedido = arrayData[1][1];

linkRegresar.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-paqueteria/pedidos.html?dpi="+dpi;
});


//solicitud de pedido
solicitarPedido();

function solicitarPedido(){
    const request = new Request("http://localhost:3000/request/find/id/"+idPedido);

    fetch(request)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            mostrarPedido(response);
            entregarPedido();
        });
}

function mostrarPedido(pedido){
    let contenido = `
        <h2>ID Pedido: ${pedido.id}</h2>
        <h2>Estado de Entrega : ${estadoEntrega(pedido.estado)}</h2>
        <h2>Fecha Pedido : ${pedido.fecha_pedido}</h2>
        <h2>Fecha de Entrega : ${pedido.fecha_entrega}</h2>
        <h2>Total : Q.${(pedido.ganancia)/(0.05)}</h2>
        <div class="contenedor-entregar">
            <button class="entregar" id="entregar">Entregar Pedido</button>
        </div>
    `;
    
    divPedido.innerHTML = contenido;
}

function estadoEntrega(estado){

    if(estado == 0){
        return "En Proceso";
    }
    if(estado == 1){
        return "Entregado";
    }
}


//entregar producto
function entregarPedido(){
    const boton = document.querySelector("#entregar");
    boton.addEventListener('click',()=>{
        realizarPeticion();
    });
}

function realizarPeticion(){
    const body = {
        id:idPedido
    }

    const request = new Request("http://localhost:3000/request/deliver",{
        method:"PUT",
        body:JSON.stringify(body),
        headers:{
            "Content-Type":"application/json"
        }
    });

    fetch(request)
        .then(res => res.json())
        .then(response => {
            if(response.state == 201){
                alertaSuccess("Pedido Entregado","http://127.0.0.1:5500/vistas/usuario-paqueteria/pedidos.html?dpi="+dpi);
            }
        });
}

//modificar fecha de entrega
modificarFechaEntrega();
function modificarFechaEntrega(){
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        console.log(fechaEntrega.value);
        const fechaNueva = new Date(fechaEntrega.value);
        fechaNueva.setDate((fechaNueva.getDate()+1));
        solicitudModificar(fechaNueva.toLocaleDateString());
    });
}

function solicitudModificar(fecha){
    const bodyRequest = {
        idPedido:idPedido,
        fecha_entrega:fecha
    }

    const request = new Request("http://localhost:3000/request/modify/deliverDate",{
        method:"PUT",
        body:JSON.stringify(bodyRequest),
        headers:{
            "Content-Type":"application/json"
        }
    });

    fetch(request)
    .then(res => res.json())
    .then(async response => {
        console.log(response);
        if(response.state == 200){
            alertaSuccess("Fecha Modificada",`http://127.0.0.1:5500/vistas/usuario-paqueteria/pedido.html?dpi=${dpi}&idPedido=${idPedido}`);
        }
    });
}

async function alertaSuccess(mensaje,link){
    await swal(mensaje,'','success');
    window.location.href=link;
}

