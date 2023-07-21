const carrito = JSON.parse(localStorage.getItem('datosPokemon')) || [];
const productosParaGuardar = [];

mostrarProductosDelCarrito();

function mostrarProductosDelCarrito() {
  const tableBodyUsuario = document.getElementById('tableBodyUsuario');
  const totalRow = document.createElement('tr');

  let total = 0;

  carrito.forEach((producto) => {
    const {_nombre, _precio, _cantidad, _id } = producto;

    console.log('Nombre:', _nombre);
    console.log('Precio:', _precio);
    console.log('Cantidad:', _cantidad);
    console.log('Id:', _id);

    const tr = document.createElement('tr');

    const nombreTd = document.createElement('td');
    nombreTd.textContent = _nombre;

    const cantidadTd = document.createElement('td');
    const cantidadInput = document.createElement('input');
    cantidadInput.type = 'number';
    cantidadInput.value = _cantidad;
    cantidadInput.addEventListener('input', function () {
      const newCantidad = parseInt(this.value);
      producto._cantidad = newCantidad;
      precioTd.textContent = (_precio * newCantidad);
      actualizarTotal();
    });
    cantidadTd.appendChild(cantidadInput);

    const precioTd = document.createElement('td');
    precioTd.textContent = (_precio * _cantidad);

    const idTd = document.createElement('td');
    idTd.textContent = _id;

    tr.appendChild(nombreTd);
    tr.appendChild(cantidadTd);
    tr.appendChild(precioTd);
    tr.appendChild(idTd); // Agregar la celda de ID a la fila

    // Agregar los datos del producto al array para guardarlos en la base de datos
    productosParaGuardar.push({
      id: _id,
      nombre: _nombre,
      cantidad: _cantidad,
      precio: _precio
    });

    total += _precio * _cantidad;

    tableBodyUsuario.appendChild(tr);
  });

  const totalTd = document.createElement('td');
  totalTd.colSpan = 4; // Ajustar la cantidad de columnas para el total y el ID
  totalTd.textContent = total;
  totalTd.id = 'totalId'; // Asignar un ID al elemento del total

  totalRow.appendChild(totalTd);
  tableBodyUsuario.appendChild(totalRow);

  function actualizarTotal() {
    total = 0;

    carrito.forEach((producto) => {
      total += producto._precio * producto._cantidad;
    });

    totalTd.textContent = total;
  }
}

function createProduct() {
  const total = document.getElementById('totalId').textContent;
  const codigoPedido = generarCodigoPedido(3);

  // Convertir el array de productosParaGuardar en una cadena JSON para enviarlo al servidor
  const productosJson = JSON.stringify(productosParaGuardar);
  console.log(productosJson);

  let data = `codigoPed=${codigoPedido}&fechaPed=${txtFecha.value}&nombre=${txtNombre.value}&direccion=${txtDireccion.value}&telefono=${txtTelefono.value}&formaPago=${selFormaPago.value}&fechaEnvPedido=${txtFechaEnvio.value}&total=${total}&idUsu=${txtUser.value}&productos=${productosJson}`;

  axios.post('../controller/pedido.create.php', data)
    .then(function(response){
      alert("Pedido tomado ");
    })
    .catch(function(error){
      console.log(error);
    });
}

function generarCodigoPedido(longitud) {
  let codigo = '';
  for (let i = 0; i < longitud; i++) {
    codigo += Math.floor(Math.random() * 10); // Generar un dígito aleatorio del 0 al 9
  }

  return codigo;
}


function readUser (){
  axios.get("../controller/read.user.php")
  .then(function(response){
  console.log(response);
  let usuario = "";
  response.data.forEach((element) => {
  usuario += `<p>${element.nombre} ${element.apellido}</p>`
})
  nombreUsuario.innerHTML = usuario;
  })
  .catch(function(error){
  console.log(error);
  })
  };
