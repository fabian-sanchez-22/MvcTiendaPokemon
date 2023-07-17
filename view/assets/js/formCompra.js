// const carrito = JSON.parse(localStorage.getItem('datosPokemon')) || [];

// // Función para mostrar los productos del carrito en la vista
// function mostrarProductosDelCarrito() {
//     const carritoElement = document.getElementById('dndNombre');
//     carritoElement.innerHTML = '';

//     console.log(carrito);

//     carrito.forEach(producto => {
//         const { _nombre, _precio, _cantidad } = producto;

//         const nombreProducto = _nombre;
//         const precioProducto = _precio;
//         const cantidadProducto = _cantidad;

//         console.log('Nombre:', nombreProducto);
//         console.log('Precio:', precioProducto);
//         console.log('Cantidad:', cantidadProducto);

//         // Imprimir el nombre en el campo de entrada
//         const nombreInput = document.getElementById('dnmNombre');
//         nombreInput.value = nombreProducto;

//         const listItem = document.createElement('li');
//         listItem.textContent = `Producto ID: ${nombreProducto} - Precio: ${precioProducto} - Cantidad: ${cantidadProducto}`;
//         carritoElement.appendChild(listItem);
//     });
// }

// mostrarProductosDelCarrito();

    // Recuperar los datos del carrito desde LocalStorage
    // const carrito = JSON.parse(localStorage.getItem('datosPokemon')) || [];

    // function mostrarProductosDelCarrito() {
    //     const nombreInput = document.getElementById('dnmNombre');
    //     const cantidadInput = document.getElementById('dnmCantidad');
    //     const precioInput = document.getElementById('dnmPrecio');
    
    //     carrito.forEach(producto => {
    //         const { _nombre, _precio, _cantidad } = producto;
    
    //         console.log('Nombre:', _nombre);
    //         console.log('Precio:', _precio);
    //         console.log('Cantidad:', _cantidad);
    
    //         nombreInput.value = _nombre;
    //         cantidadInput.value = _cantidad;
    //         precioInput.value = _precio;
    //     });
    // }
    
    // mostrarProductosDelCarrito();
    

const carrito = JSON.parse(localStorage.getItem('datosPokemon')) || [];


mostrarProductosDelCarrito();


function mostrarProductosDelCarrito() {
  const tableBodyUsuario = document.getElementById('tableBodyUsuario');
  const totalRow = document.createElement('tr');

  let total = 0;

  carrito.forEach((producto) => {
    const { _nombre, _precio, _cantidad } = producto;

    console.log('Nombre:', _nombre);
    console.log('Precio:', _precio);
    console.log('Cantidad:', _cantidad);

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
      precioTd.textContent = (_precio * newCantidad).toFixed(2);
      actualizarTotal();
    });
    cantidadTd.appendChild(cantidadInput);

    const precioTd = document.createElement('td');
    precioTd.textContent = (_precio * _cantidad).toFixed(2);

    tr.appendChild(nombreTd);
    tr.appendChild(cantidadTd);
    tr.appendChild(precioTd);

    total += _precio * _cantidad;

    tableBodyUsuario.appendChild(tr);
  });

  const totalTd = document.createElement('td');
  totalTd.colSpan = 3;
  totalTd.textContent = 'Total: ' + total.toFixed(2);

  totalRow.appendChild(totalTd);
  tableBodyUsuario.appendChild(totalRow);

  // Función para actualizar el total
  function actualizarTotal() {
    total = 0;

    carrito.forEach((producto) => {
      total += producto._precio * producto._cantidad;
    });

    totalTd.textContent = 'Total: ' + total.toFixed(2);
  }
}
