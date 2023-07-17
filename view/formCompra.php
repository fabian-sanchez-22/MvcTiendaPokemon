<!DOCTYPE html>
<html>
<head>
    <title>Detalles de la Compra</title>
</head>
<body>
    <h1>Detalles de la Compra</h1>
    <ul id="carrito">
        <!-- Aquí se mostrarán los productos del carrito -->
    </ul>

    <script>
        // Recuperar los datos del carrito desde LocalStorage
        const carrito = JSON.parse(localStorage.getItem('datosPokemon')) || [];

        // Función para mostrar los productos del carrito en la vista
        function mostrarProductosDelCarrito() {
            const carritoElement = document.getElementById('carrito');
            carritoElement.innerHTML = '';

            console.log(carrito)

            carrito.forEach(producto => {
                const listItem = document.createElement('li');
                listItem.textContent = `Producto ID: ${producto._nombre} - Precio: ${producto._precio} - Cantidad: ${producto._cantidad}`;
                carritoElement.appendChild(listItem);
            });
        }

        mostrarProductosDelCarrito();
    </script>
</body>
</html>
