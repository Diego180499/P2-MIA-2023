const linkRegresar = document.querySelector("#regresar");
const contenedorDatos = document.querySelector("#contenedor-datos");
//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];

linkRegresar.addEventListener('click',()=>{
    window.location.href="http://127.0.0.1:5500/vistas/usuario-comun/index.html?dpi="+dpi;
});


//mostrar datos
mostrarDatos();
function mostrarDatos(){
    const request = new Request("http://localhost:3000/user/find/dpi/"+dpi);
    fetch(request)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            contenedorDatos.innerHTML = llenarDiv(response);
        });
}

function llenarDiv(usuario){
    let contenido = `
        <div class="datos">
            <h1>
            Datos Personales
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="10" r="3" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
            </h1>
            <h2>DPI : ${usuario.dpi}</h2>
            <h2>Nombre : ${usuario.nombre}</h2>
            <h2>Apellido : ${usuario.apellido}</h2>
            <h1>
            Datos de Tarjeta
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="7" y1="15" x2="7.01" y2="15" />
                <line x1="11" y1="15" x2="13" y2="15" />
            </svg>
            </h1>
            ${usuario.tarjeta == null ? "" : "<h2>"+usuario.tarjeta.numero+"</h2>"+"<h2>"+usuario.tarjeta.monto+"</h2>"}
        </div>
    `;

    return contenido;
}