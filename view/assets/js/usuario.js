
function create(){
    let data= `tipoDoc=${selTipoDoc.value}&identificacion=${txtIdentificacion.value}&nombre=${txtNombre.value}&apellido=${txtApellido.value}&correo=${txtCorreo.value}&password=${txtContrasena.value}&direccion=${txtDireccion.value}&telefono=${txtTelefono.value}&genero=${selGenero.value}&rol=${selRol.value}`


axios.post('../controller/usuario.create.php', data)
.then(function(response){
console.log(response);
})
.catch(function(error){
console.log(error);
});
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


    



