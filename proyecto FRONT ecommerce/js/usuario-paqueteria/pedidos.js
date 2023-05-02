const linkRegresar = document.querySelector("#link-regresar");
const tabla = document.querySelector("#tabla");
//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];


linkRegresar.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-paqueteria/index.html?dpi="+dpi;
});

//mostrar pedidos
mostrarPedidos();


function mostrarPedidos(){
    const request = new Request("http://localhost:3000/request/getBy/inProcess");

    fetch(request)
        .then(res => res.json())
            .then(response => {
                //console.log(response);                
                tabla.innerHTML = llenarTabla(response);
            });
}


//llenar tabla
function llenarTabla(pedidos){
    console.log(pedidos);
    let contenido = `
    <tr>
        <th>ID Pedido</th>
        <th>Fecha Pedido</th>
        <th>Fecha Entrega</th>
        <th>Estado</th>
        <th>-</th>
    </tr>`;

    for(let i=0; i<pedidos.length; i++){
        contenido +=`
        <tr>
            <td>${pedidos[i].id}</th¡d>
            <td>${pedidos[i].fecha_pedido}</td>
            <td>${pedidos[i].fecha_entrega}</td>
            <td>${verEstado(pedidos[i].estado)}</td>
            <td><a href="http://127.0.0.1:5500/vistas/usuario-paqueteria/pedido.html?dpi=${dpi}&idPedido=${pedidos[i].id}">
            Ver Detalles</a></td>
        </tr>
        `;
    }

    return contenido;
}


function verEstado(estado){
    if(estado == 0){
        return "En proceso";
    }
}

