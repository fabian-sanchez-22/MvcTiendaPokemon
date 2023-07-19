<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
    <script src="./assets/Js/usuario.js"></script>
    <script src="./assets/Js/axios.min.js"></script>
    <script src="./assets/Js/bootstrap.js"></script>
    <script src="./assets/Js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/bootstrap.css">
</head>

<body onload="readInventario()">

    <h1 style="text-align: center;">Inventario</h1>
    <br>

    <div class="row">
        <div class="col-9">
            <div>
                <table style="margin-left: 450px;">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>

                    <tbody id="tableInventario"></tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Modal para modificar la cantidad -->
<div class="modal fade" id="updateModals" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="updateModalLabel">Modificar Cantidad</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label for="cantidadMod">Cantidad:</label>
        <input type="number" id="cantidadMod" class="form-control">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" onclick="actualizarCantidad()">Guardar Cambios</button>
      </div>
    </div>
  </div>
</div>

<!-- Botón "Modificar" en la tabla -->





</body>

</html>