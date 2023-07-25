
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
        tabla += `</tr>`;
        obtnerIdPokemon(element.id, element.life);
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


function obtnerIdPokemon(id, life){
axios.get(`../controller/buscar.id.pokemon.php?idPoke=${id}`)
.then (function(response){
    let idPokemon = response.data[0].idPokemon;
    let cantidadPokemon = parseInt(life - response.data[0].cantidadPokemon)
    descontar(idPokemon, cantidadPokemon);

})
.catch(function(error){
console.log(error);
})
}

function descontar (idPokemon, cantidadPokemon){
    let data = `idPokemon=${idPokemon}&cantidad=${cantidadPokemon}`
axios.post("../controller/descontar.pokemon.php", data)
.then(function(response){

readInventario();
})
.catch(function(error){
console.log(error);
})
}

descontar();


var id;

function obtenerIdUsuario() {
    fetch("../controller/obtenerIdUsuario.php")
        .then(response => response.json())
        .then(data => {
            id = data.id;
            readPedidos(id); 
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
          let prevCodigoPed = null; 

          response.data.forEach((element) => {
              if (prevCodigoPed === null || prevCodigoPed !== element.codigoPed) {
                  
                  if (prevCodigoPed !== null) {
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