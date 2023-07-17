<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
    <script src="./assets/Js/usuario.js"></script>
    <script src="./assets/Js/axios.min.js"></script>
</head>

<body onload="readInventario()">

    <h1 style="text-align: center;">Inventario</h1>
    <br>

    <div>
        <table style="margin-left: 500px;" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>

            <tbody id="tableInventario"></tbody>
        </table>
    </div>



</body>

</html>

