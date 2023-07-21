
function create(){
    let data= `tipoDoc=${selTipoDoc.value}&identificacion=${txtIdentificacion.value}&nombre=${txtNombre.value}&apellido=${txtApellido.value}&correo=${txtCorreo.value}&password=${txtContrasena.value}&direccion=${txtDireccion.value}&telefono=${txtTelefono.value}&genero=${selGenero.value}&rol=${selRol.value}`


axios.post('../controller/usuario.create.php', data)
.then(function(response){
console.log(response);
alert("Ususario creado");
clear();
})
.catch(function(error){
console.log(error);
});
}



function clear() {
    selTipoDoc.value = "";
    txtIdentificacion.value = "";
    txtNombre.value = "";
    txtApellido.value = "";
    txtCorreo.value = "";
    txtContrasena.value = "";
    txtDireccion.value = "";
    txtTelefono.value = "";
    selGenero.value = "";
    selRol.value = "";
}



function selectRol(){
    axios.get("../controller/rol.read.php")
    .then(function(response){
    console.log(response);
    let roles = "";
    response.data.forEach(element => {
        roles += `<option value="${element.id}">${element.nombreRol}</option>`;
        console.log(element.nombreRol);
    });
    selRol.innerHTML = roles; 
    })
    .catch(function(error){
    console.log(error);
    })
    }

    function readInventario (){
        axios.get("../controller/readInventario.php")
        .then(function(response){
            let tabla = "";
        response.data.forEach((element) => {
        tabla += `<tr>`;
        tabla += `<td>${element.id}</td>`;
        tabla += `<td>${element.name}</td>`;
        tabla += `<td>${element.life}</td>`;
        tabla += `<td>
        <a onclick="readStock(${element.id}, ${element.life})" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#updateModals">Modificar</a>
                </td>`;
        tabla += `<tr>`;
        })
        tableInventario.innerHTML = tabla;
        })
        .catch(function(error){
        console.log(error);
        })
        }


var currentElementId; 

function readStock(id, cantidad) {
axios.get(`../controller/stock.update.php?id=${id}`)
    .then(function (response) {
    console.log(response.data);

    const cantidadInput = document.getElementById('cantidadMod');
    cantidadInput.value = cantidad; 

    currentElementId = id; 
    })
    .catch(function (error) {
    console.log(error);
    });
}


function actualizarCantidad(){
let data = `id=${currentElementId}&cantidad=${cantidadMod.value}`
axios.post("../controller/stock.update.php", data)
.then(function(response){
    console.log(data);
console.log(response);
readInventario()
})
.catch(function(error){
console.log(error);
})
}








