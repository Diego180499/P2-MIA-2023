const linkRegresar = document.querySelector("#link-regresar");
const divPedido = document.querySelector("#pedido");

//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];
const idPedido = arrayData[1][1];


linkRegresar.addEventListener("click",()=>{
    console.log(dpi);
    window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/pedidos.html?dpi="+dpi;
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
        });
}

function mostrarPedido(pedido){
    let contenido = `
        <h2>ID Pedido : ${pedido.id}</h2>
        <h2>Estado de Entrega : ${estadoEntrega(pedido.estado)}</h2>
        <h2>Fecha Pedido : ${pedido.fecha_pedido}</h2>
        <h2>Fecha de Entrega : ${pedido.fecha_entrega}</h2>
        <h2>Total : Q.${(pedido.ganancia)/(0.05)}</h2>
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