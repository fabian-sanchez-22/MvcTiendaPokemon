<?php 

session_start();
$idUsuario = isset($_SESSION["idUsuario"]) ? $_SESSION["idUsuario"] : "";
include_once "header.php";
?>

<style>
    #totalId {
        font-size: 20px;
        font-weight: bold;
    }
    </style>

<div class="row mt-5 d-flex justify-content-center">
    <h1 class="bg-dark py-1 text-center text-white">Resumen de compra</h1>
    <div class="col-10">
        <table class="table" id="tableUsuario">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody id="tableBodyUsuario"></tbody>
        </table>
    </div>
</div>

<h4 style=" left: 40px; top: 380px; position: absolute;" >Total:</h4>
<h1 class="bg-dark py-1 text-center text-white">Datos de envío</h1>


<div class="row">
    <div class="col-2">
        <span class="fw-bolder">Fecha del pedido:</spam>
    </div>

    <div class="col-4">
        <div class="form-floating">
            <input type="date" name="txtFecha" id="txtFecha" class="form-control" placeholder=".">
            <label for="floatingInput">Fecha del pedido</label>
        </div>
    </div>

    <div class="col-2">
        <span class="fw-bolder">Nombre:</spam>
    </div>

    <div class="col-4">
        <div class="form-floating">
            <input type="text" name="txtNombre" id="txtNombre" class="form-control" placeholder=".">
            <label for="floatingInput">Nombre</label>
        </div>
    </div>
</div>

<div class="row mt-3">

    <div class="col-2">
        <span class="fw-bolder">Direccion:</spam>
    </div>
    <div class="col-4">
        <div class="form-floating">
            <input type="text" name="txtDireccion" id="txtDireccion" class="form-control" placeholder=".">
            <label for="floatingInput">Direccion</label>
        </div>
    </div>

    <div class="col-2">
        <span class="fw-bolder">Telefono:</spam>
    </div>
    <div class="col-4">
        <div class="form-floating">
            <input type="text" name="txtTelefono" id="txtTelefono" class="form-control" placeholder=".">
            <label for="floatingInput">Telefono</label>
        </div>
    </div>

</div>


<div class="row mt-3">
    <div class="col-2">
        <span class="fw-bolder">Fecha De Envio</spam>
    </div>
    <div class="col-4">
        <div class="form-floating">
            <input type="date" name="txtFechaEnvio" id="txtFechaEnvio" class="form-control" placeholder=".">
            <label for="floatingInput">Fecha De Envio</label>
        </div>
    </div>

    <div class="col-2">
        <span class="fw-bolder">Forma de pago:</spam>
    </div>
    <div class="col-4">
        <div class="form-floating">
            <select name="selFormaPago" id="selFormaPago" class="form-control">
                <option value="0" selected disabled>Seleccionar</option>
                <option value="Transferencia">Transferencia</option>
                <option value="Contraentrega">Contraentrega</option>
                <option value="Consignacion">Consignacion</option>
            </select>
            <label for="floatingInput">Forma de pago</label>
        </div>
    </div>
</div>

<div class="row mt-3">

    <div class="col-2">
        <span class="fw-bolder">Estado del pedido:</spam>
    </div>
    <div class="col-4">
        <div class="form-floating">
            <input type="text" name="txtEstadoPedido" id="txtEstadoPedido" class="form-control" placeholder="." readonly>
        </div>
    </div>

    <div class="col-2">
        <span class="fw-bolder">Usuario:</spam>
    </div>
    <div class="col-4">
        <div class="form-floating">
            <input type="text" name="txtUser" id="txtUser" class="form-control" placeholder="." readonly value="<?php echo $idUsuario; ?>">
        </div>
    </div>

</div>

<div class="row mt-5 justify-content-center">
    <div class="col-4 d-grid gap-2">
        <a onclick="createProduct()" class="btn btn-primary">Realizar Pedido</a>
    </div>
</div>

<style></style>

<script src="./assets/js/formCompra.js"></script>
<script src="./assets/js/axios.min.js"></script>
