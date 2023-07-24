
function readPedidos2() {
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
                    ped += `<td> <select name="selEstadoPedido" id="selEstadoPedido${element.idUsu}" class="form-control" 
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
  readPedidos2();




  
function actualizarEstado(idUsu, codigoPed) {
    const elementUsu = document.getElementById(`selEstadoPedido${idUsu}`);
    const estadoActualizados = elementUsu.value;
    const data = `idUsu=${idUsu}&estadoActualizado=${estadoActualizados}&codigoPed=${codigoPed}`;
    console.log(data);
    axios.post("../controller/estado.update.php", data) // Aquí pasamos el objeto data como segundo parámetro
      .then(function (response) {
        console.log(response);
        if (response.success) {
          actualizarEstadoPedido(codigoPed, estadoActualizados);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  
  
  function actualizarEstadoPedido(codigoPed, estadoActualizados) {
    const data = `codigoPed=${codigoPed}&estadoActualizado=${estadoActualizados}`;
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

  
