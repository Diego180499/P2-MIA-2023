const linkRegresar = document.querySelector("#link-regresar");
const tabla = document.querySelector("#tabla");

//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];


linkRegresar.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/vistas/usuario-admin/reportes.html?dpi="+dpi;
});


//solicitud de reporte
solicitudReporte();

async function solicitudReporte(){
    const request = new Request("http://localhost:3000/reports/firstReport");
    let contenido = ``;
    await fetch(request)
        .then(res => res.json())
        .then( response => {
            llenarTabla(response.report);            
        });

    console.log(contenido);
}

async function llenarTabla(reportes){
    let contenido = `
    <tr>
        <th>ID Producto</th>
        <th>Producto</th>
        <th>Cantidad vendidos</th>
    </tr>`;

    for(let i=0; i<reportes.length; i++){
        const producto = await solicitarProducto(reportes[i]._id);
        contenido +=  `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${reportes[i].productosVendidos}</td>
            </tr>
        `; 
    }

    //console.log(contenido);
    tabla.innerHTML = contenido;
}


//solicitud de producto por id
async function solicitarProducto(id){
    const request = new Request("http://localhost:3000/products/find/id/"+id);
    let producto = {};
    await fetch(request)
        .then(res => res.json())
        .then( response => {
            //console.log(response);
             producto =  response;
        });
    return producto;
}