const linkRegresar = document.querySelector("#link-regresar");
const tabla = document.querySelector("#tabla");

//obtener query params
const params = new URL(window.location.href).searchParams;
const data = new URLSearchParams(params).entries();
const arrayData = Array.from(data);
const dpi = arrayData[0][1];


linkRegresar.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/vistas/usuario-admin/index.html?dpi="+dpi;
});

peticionEmpleados();

function peticionEmpleados(){
    const request = new Request("http://localhost:3000/user/getAll");
    fetch(request)
        .then(res => res.json())
        .then(response =>{
            console.log(response);
            const contenidoTabla = mostrarEmpleados(response);
            tabla.innerHTML=contenidoTabla;
        });
}


function mostrarEmpleados(usuarios){
    let contenido = `<tr>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>DPI</th>
    <th>Usuario</th>
    <th>Password</th>
    <th>Rol</th>
    </tr>`;

    for(let i=0; i<usuarios.length;i++){
        contenido += `<tr>
            <td>${usuarios[i].nombre}</td>
            <td>${usuarios[i].apellido}</td>
            <td>${usuarios[i].dpi}</td>
            <td>${usuarios[i].usuario}</td>
            <td>${usuarios[i].password}</td>
            <td>${mostrarTipoUsuario(usuarios[i].tipo_usuario)}</td>
            <td><a href="#" class="modificar" id="modificar">Modificar</a></td>
            <td><a href="#" class="eliminar" id="eliminar">Eliminar</a></td>
        </tr>`;
    }
    return contenido;
}

function mostrarTipoUsuario(tipo){
    if(tipo == 1){
        return "Administrador";
    }

    if(tipo == 2){
        return "Paquetería";
    }

    if(tipo == 3){
        return "Común"
    }
}