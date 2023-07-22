<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
    <script src="./assets/js/usuario.js"></script>
    <script src="./assets/Js/axios.min.js"></script>
    <script src="./assets/Js/bootstrap.js"></script>
    <script src="./assets/Js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/bootstrap.css">
</head>

<body onload="readPedidos()">
    <h1 style="text-align: center;">Pedidos Realizados</h1>
    <br>

    <div class="row">
        <div class="col-9">
            <div>
                <table style="width: 1300px; margin-left: 40px; ">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Codigo Pedido</th>
                            <th>Fecha</th>
                            <th>Nombre</th>
                            <th>Direccion</th>
                            <th>telefono</th>
                            <th>Total a pagar</th>
                            <th>Articulo(s)</th>
                        </tr>
                    </thead>

                    <tbody id="tablePedidos"></tbody>
                </table>
            </div>
        </div>
    </div>

    
</body>

</html>