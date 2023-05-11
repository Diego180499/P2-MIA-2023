const linkRegresar = document.querySelector("#link-regresar");
const boton1 = document.querySelector("#boton-1");
const boton2 = document.querySelector("#boton-2");
const boton4 = document.querySelector("#boton-4");
const boton5 = document.querySelector("#boton-5");


//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];


linkRegresar.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/vistas/usuario-admin/index.html?dpi="+dpi;
});

//redireccionar a los reportes
boton1.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/vistas/reportes/Firstreport.html?dpi="+dpi;
});

boton2.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/vistas/reportes/secondreport.html?dpi="+dpi;
});

boton4.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/vistas/reportes/quarterReport.html?dpi="+dpi;
});

boton5.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/vistas/reportes/fifthReport.html?dpi="+dpi;
});