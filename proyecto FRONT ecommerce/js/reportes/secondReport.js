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
    const request = new Request("http://localhost:3000/reports/secondReport");
    await fetch(request)
        .then(res => res.json())
        .then( response => {
            //llenarTabla(response.report); 
            console.log(response.report);
            llenarTabla(response.report);
        });
}

async function llenarTabla(reportes){
    let contenido = `
        <tr>
            <th>DPI Cliente</th>
            <th>Nombre Cliente</th>
            <th>Ganancia Generada</th>
        </tr>
    `;

    for(let i=0; i<reportes.length; i++){
        const usuario = await solicitudCliente(reportes[i]._id);
        contenido += `
            <tr>
                <td>${usuario.dpi}</td>
                <td>${usuario.nombre}  ${usuario.apellido}</td>
                <td>${reportes[i].gananciasGeneradas}</td>
            </tr>
        `;
    }
    
    tabla.innerHTML = contenido;
}



//solicitud de cliente por dpi
async function solicitudCliente(dpi){
    const request = new Request("http://localhost:3000/user/find/dpi/"+dpi);
    let usuario = {}
    await fetch(request)
        .then(res => res.json())
        .then(async response => {
            //console.log(response);
            usuario = await response;
        });
    
    return usuario;
}
