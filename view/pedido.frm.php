<?php 
include_once "header.php";
?>


<!-- <div class="row my-5">
    <h1 class="text-center  ">FORMULARIO DE PEDIDOS</h1>
</div>


<div class="col-2">
        <span class="fw-bolder">Nombre:</spam>
    </div>

    <div class="col-4">
    <div class="form-floating">
        <input type="text" name="dnmNombre" id="dnmNombre" class="form-control" placeholder=".">
        <label for="floatingInput">Nombre</label>
    </div>
</div>



<div class="col-2">
        <span class="fw-bolder">Cantidad:</spam>
    </div>

    <div class="col-4">
    <div class="form-floating">
        <input type="text" name="dnmCantidad" id="dnmCantidad" class="form-control" placeholder=".">
        <label for="floatingInput">Cantidad</label>
    </div>
</div>

<div class="col-2">
        <span class="fw-bolder">Precio:</spam>
    </div>

    <div class="col-4">
    <div class="form-floating">
        <input type="text" name="dnmPrecio" id="dnmPrecio" class="form-control" placeholder=".">
        <label for="floatingInput">Precio</label>
    </div>
</div> -->


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
                <option value="EF">Efectivo</option>
                <option value="TC">Tarjeta</option>
                <option value="NE">Nequi</option>
            </select>
            <label for="floatingInput">Forma de pago</label>
        </div>
    </div>
</div>

<div class="row mt-3">
    <div class="col-2">
        <span class="fw-bolder">Total del Pedido</spam>
    </div>
    <div class="col-4">
        <div class="form-floating">
            <input type="text" name="txtTotalPedido" id="txtTotalPedido" class="form-control" placeholder="." readonly>
        </div>
    </div>

    <div class="col-2">
        <span class="fw-bolder">Estado del pedido:</spam>
    </div>
    <div class="col-4">
        <div class="form-floating">
            <input type="text" name="txtEstadoPedido" id="txtEstadoPedido" class="form-control" placeholder="." readonly>
        </div>
    </div>
</div>

<script src="./assets/js/formCompra.js"></script>
