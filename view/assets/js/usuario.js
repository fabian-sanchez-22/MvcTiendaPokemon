
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

// Se muestran sin agrupar 
// function readPedidos(){
// axios.get("../controller/pedidos.read.php")
// .then(function (response){
// console.log(response.data);
// let ped = "";
// response.data.forEach((element, index) => {
//     ped += `<tr>`;
//     ped += `<th scope="row">${index + 1}</th>`;
//     ped += ` <td>${element.codigoPed}</td>`;
//     ped += ` <td>${element.fechaPed}</td>`;
//     ped += ` <td>${element.nombre}</td>`;
//     ped += ` <td>${element.direccion}</td>`;
//     ped += ` <td>${element.telefono}</td>`;
//     ped += ` <td>${element.nombrePokemon}</td>`;
//     ped += ` <td>${element.cantidadPokemon}</td>`;
//     ped += ` <td>${element.totalPed}</td>`;
//     ped += ` <tr>`
// });
// tablePedidos.innerHTML = ped;
// })
// .catch(function (error){
// console.log(error);
// })
// }

// readPedidos()


function readPedidos() {
    axios.get("../controller/pedidos.read.php")
      .then(function (response) {
        console.log(response.data);
        let ped = "";
        let prevCodigoPed = null; // Variable para comparar el código de pedido anterior
        let rowCount = 1; // Contador de filas

        response.data.forEach((element) => {
          if (prevCodigoPed === null || prevCodigoPed !== element.codigoPed) {
            // Si es el primer registro o el código de pedido cambió, crea una nueva fila
            if (prevCodigoPed !== null) {
              // Si no es el primer registro, cierra la fila anterior
              ped += `</tr>`;
            }
            ped += `<tr>`;
            ped += `<th scope="row">${rowCount}</th>`;
            ped += ` <td>${element.codigoPed}</td>`;
            ped += ` <td>${element.fechaPed}</td>`;
            ped += ` <td>${element.nombre}</td>`;
            ped += ` <td>${element.direccion}</td>`;
            ped += ` <td>${element.telefono}</td>`;
            ped += ` <td>${element.totalPed}</td>`;
            rowCount++;
          }
          ped += ` <td>${element.nombrePokemon}</td>`;
          
          prevCodigoPed = element.codigoPed;
        });

        if (prevCodigoPed !== null) {
          // Si hay registros, cierra la última fila
          ped += `</tr>`;
        }

        tablePedidos.innerHTML = ped;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Llamar a la función para obtener y mostrar los pedidos al cargar la página
  readPedidos();







