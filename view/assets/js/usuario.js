
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


          response.data.forEach((element) => {
              if (prevCodigoPed === null || prevCodigoPed !== element.codigoPed) {
                  // Si es el primer registro o el código de pedido cambió, crea una nueva fila
                  if (prevCodigoPed !== null) {
                      // Si no es el primer registro, cierra la fila anterior
                      ped += `</tr>`;
                  }
                  ped += `<tr>`;

                  ped += `<td>${element.codigoPed}</td>`
                  ped += `<td>${element.fechaPed}</td>`
                  ped += `<td>${element.nombre}</td>`
                  ped += `<td>${element.direccion}</td>`
                  ped += `<td>${element.telefono}</td>`
                  ped += `<td>${element.cantidadPokemon}</td>`
                  ped += `<td>${element.totalPed}</td>`
                  ped += `<td> <select name="selRecibido" id="selEstadoPedido${element.idUsu}" class="form-control" 
                  onchange="actualizarEstado(${element.idUsu}, '${element.codigoPed}')">
                    <option value="${element.estadoPedido}" selected disabled>${element.estadoPedido}</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Enviado">Enviado</option>
                    <option value="Cancelado">Cancelado</option>
                </select></td>`


                }

                prevCodigoPed = element.codigoPed;
                ped += ` <td>${element.nombrePokemon}</td>`;
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
readPedidos();



function actualizarEstado(idUsu, codigoPed) {
  const elementUsu = document.getElementById(`selEstadoPedido${idUsu}`);
  const estadoActualizado = elementUsu.value;
  const data = `idUsu=${idUsu}&estadoActualizado=${estadoActualizado}&codigoPed=${codigoPed}`;
  console.log(data);
  axios.post("../controller/estado.update.php", data) // Aquí pasamos el objeto data como segundo parámetro
    .then(function (response) {
      console.log(response);
      if (response.success) {
        actualizarEstadoPedido(codigoPed, estadoActualizado);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}



function actualizarEstadoPedido(codigoPed, estadoActualizado) {
  const data = `codigoPed=${codigoPed}&estadoActualizado=${estadoActualizado}`;
  axios.post("../controller/read.update.estado.php", data, {
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
      },
  })
  .then(response => {
      console.log(response.data);
      alert("Estado actualizado para todos los pedidos con el mismo código de pedido");
  })
  .catch(error => {
      console.error("Error al actualizar los pedidos:", error);
    });
}


var id;

// Función para obtener el ID de usuario mediante AJAX
function obtenerIdUsuario() {
    fetch("../controller/obtenerIdUsuario.php")
        .then(response => response.json())
        .then(data => {
            id = data.id;
            readPedidos(id); // Llamamos a la función read después de obtener el ID
        })
        .catch(error => {
            console.error("Error al obtener el ID de usuario:", error);
        });
}

obtenerIdUsuario();

function readPedidos() {
  axios.get(`../controller/pedido.read.php?id=${id}`)
      .then(function (response) {
          console.log(response.data);
          let ped = "";
          let prevCodigoPed = null; // Variable para comparar el código de pedido anterior


          response.data.forEach((element) => {
              if (prevCodigoPed === null || prevCodigoPed !== element.codigoPed) {
                  // Si es el primer registro o el código de pedido cambió, crea una nueva fila
                  if (prevCodigoPed !== null) {
                      // Si no es el primer registro, cierra la fila anterior
                      ped += `</tr>`;
                  }
                  ped += `<tr>`;

                  ped += ` <td>${element.id}</td>`;
                  ped += ` <td>${element.codigoPed}</td>`;
                  ped += ` <td>${element.formaPago}</td>`;
                  ped += `<td> <select name="selRecibido" id="selEstadoPedido${element.idUsu}" class="form-control" onchange="actualizarEstado(${element.idUsu}, '${element.codigoPed}')">
                  <option value="${element.estadoPedido}" selected disabled>${element.estadoPedido}</option>
                  <option value="Recibido">Recibido</option>
                  </select></td>`
  
  
                  }
  
                  prevCodigoPed = element.codigoPed;
              });
  
              if (prevCodigoPed !== null) {
                  // Si hay registros, cierra la última fila
                  ped += `</tr>`;
              }
  
              tableBodyPedidos.innerHTML = ped;
          })
          .catch(function (error) {
              console.log(error);
          });
  }
readPedidos();



function actualizarEstado(idUsu, codigoPed) {
  const selectElement = document.getElementById(`selEstadoPedido${idUsu}`);
  const nuevoEstado = selectElement.value;

  const data = `idUsu=${idUsu}&estadoActualizado=${nuevoEstado}&codigoPed=${codigoPed}`;
  fetch("../controller/estado.update.php", {
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
  })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          if (data.success) {
              // Si la actualización del estado del pedido fue exitosa, actualizar todos los pedidos con el mismo código de pedido
              actualizarPedidosPorCodigo(codigoPed, nuevoEstado);
          }
      })
      .catch(error => {
          console.error("Error al actualizar el estado:", error);
      });
}
function actualizarPedidosPorCodigo(codigoPed, nuevoEstado) {
  fetch("../controller/read.update.estado.php", {
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `codigoPed=${codigoPed}&estadoActualizado=${nuevoEstado}`,
  })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          alert("Estado actualizado para todos los pedidos con el mismo código de pedido");
      })
      .catch(error => {
          console.error("Error al actualizar los pedidos:", error);
        });
}