const linkRegresar = document.querySelector("#link-regresar");
const tabla = document.querySelector("#tabla");

//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];

console.log(dpi);

linkRegresar.addEventListener("click",()=>{
    console.log(dpi);
    window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/index.html?dpi="+dpi;
});

//obtener pedidos de el usuario
obtenerPedidos();

function obtenerPedidos(){
    const request = new Request("http://localhost:3000/request/getBy/user/"+dpi);
    fetch(request)
    .then(res => res.json()
    .then(response => {
        console.log(response);
        tabla.innerHTML = mostrarPedidos(response);
    }));
}


function mostrarPedidos(pedidos){
    let contenido =
    `<tr>
        <th>ID Pedido</th>
        <th>Fecha Pedido</th>
        <th>Fecha Entrega</th>
        <th>Estado de Entrega</th>
        <th> - </th>
    </tr>
    `;

    for(let i=0; i<pedidos.length; i++){
        contenido += `
            <tr>
                <td>${pedidos[i].id}</td>
                <td>${pedidos[i].fecha_pedido}</td>
                <td>${pedidos[i].fecha_entrega}</td>
                <td>${verEstado(pedidos[i].estado)}</td>
                <td><a href="http://127.0.0.1:5500/vistas/usuario-comun/pedido.html?dpi=${dpi}&idPedido=${pedidos[i].id}">
                Ver Detalles</a></td>
            </tr>
        `;
    }

    return contenido;
}


function verEstado(estado){
    if(estado == 0){
        return "En proceso"
    }
    if(estado == 1){
        return "Entregado";
    }
}