<?php 
include_once "header.php";
?>


<div class="row my-5">
    <h1 class="text-center  ">FORMULARIO DE PEDIDOS</h1>
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
<!-- 
<div class="row mt-3">
    <div class="col-2">
        <span class="fw-bolder">Genero:</spam>
    </div>

    <div class="col-4">
        <div class="form-floating">
            <select name="selGenero" id="selGenero" class="form-control">
                <option value="0" selected disabled>Seleccionar</option>
                <option value="F">Femenino</option>
                <option value="M">Masculino</option>
            </select>
            <label for="floatingInput">Genero</label>
        </div>
    </div>

    <div class="col-2">
        <span class="fw-bolder">Rol:</spam>
    </div>
    <div class="col-4">
        <div class="form-floating">
            <select name="selRol" id="selRol" class="form-control"></select>
            <label for="floatingInput">Rol</label>
        </div>
    </div>
</div>

<div class="row mt-5 justify-content-center">
    <div class="col-4 d-grid gap-2">
        <a onclick="create()" class="btn btn-primary">Crear</a>
    </div>
</div>

<div class="row mt-5 d-flex justify-content-center">
    <h1 class="bg-dark py-1 text-center text-white">Tabla de usuarios</h1>
    <div class="col-10">
        <table class="table" id="tableUsuario">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tipo Doc</th>
                    <th scope="col">Ident.</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">correo</th>
                    <th scope="col">Rol</th>
                </tr>
            </thead>
            <tbody id="tableBodyUsuario"></tbody>
        </table>
    </div>
</div> -->


<!-- Modal Modificar -->
<!-- <div>
    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-gradient bg-warning">
                    <h5 class="modal-title col-11 text-center ms-4 fs-5" id="updateModalLabel">Modificar Usuario</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">


                    <div class="row">
                        <div class="col-2">
                            <span class="fw-bolder">Tipo Doc:</spam>
                        </div>

                        <div class="col-4">
                            <div class="form-floating">
                                <select name="selTipoDocMod" id="selTipoDocMod" class="form-control">
                                    <option value="0" selected disabled>Seleccionar</option>
                                    <option value="CC">CC</option>
                                    <option value="TI">TI</option>
                                    <option value="NUIP">NUIP</option>
                                </select>
                                <label for="floatingInput">Tipo Doc</label>
                            </div>
                        </div>

                        <div class="col-2">
                            <span class="fw-bolder">Identificacion:</spam>
                        </div>

                        <div class="col-4">
                            <div class="form-floating">
                                <input type="number" name="txtIdentificacionMod" id="txtIdentificacionMod"
                                    class="form-control" placeholder=".">
                                <label for="floatingInput">Identificacion</label>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">

                        <div class="col-2">
                            <span class="fw-bolder">Nombre:</spam>
                        </div>
                        <div class="col-4">
                            <div class="form-floating">
                                <input type="text" name="txtNombreMod" id="txtNombreMod" class="form-control"
                                    placeholder=".">
                                <label for="floatingInput">Nombre</label>
                            </div>
                        </div>

                        <div class="col-2">
                            <span class="fw-bolder">Apellido:</spam>
                        </div>
                        <div class="col-4">
                            <div class="form-floating">
                                <input type="text" name="txtApellidoMod" id="txtApellidoMod" class="form-control"
                                    placeholder=".">
                                <label for="floatingInput">Apellido</label>
                            </div>
                        </div>

                    </div>


                    <div class="row mt-3">
                        <div class="col-2">
                            <span class="fw-bolder">Correo:</spam>
                        </div>
                        <div class="col-4">
                            <div class="form-floating">
                                <input type="email" name="txtCorreoMod" id="txtCorreoMod" class="form-control"
                                    placeholder=".">
                                <label for="floatingInput">Correo</label>
                            </div>
                        </div>
                        <div class="col-2">
                            <span class="fw-bolder">Genero:</spam>
                        </div>

                        <div class="col-4">
                            <div class="form-floating">
                                <select name="selGeneroMod" id="selGeneroMod" class="form-control">
                                    <option value="0" selected disabled>Seleccionar</option>
                                    <option value="F">Femenino</option>
                                    <option value="M">Masculino</option>
                                </select>
                                <label for="floatingInput">Genero</label>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">

                        <div class="col-2">
                            <span class="fw-bolder">Rol:</spam>
                        </div>
                        <div class="col-4">
                            <div class="form-floating">
                                <select name="selRolMod" id="selRolMod" class="form-control"></select>
                                <label for="floatingInput">Rol</label>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button onclick="update()" type="button" class="btn btn-warning" data-bs-dismiss="modal">Modificar</button>
                </div>
            </div>
        </div>
    </div>
</div>
 -->


<!-- Modal Eliminar-->
<!-- <div>
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-danger bg-gradient">
                    <h1 class="modal-title col-11 text-center ms-4 fs-5" id="deleteModalLabel" >Eliminar</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p id="mensaje"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button onclick="deletes()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</div> -->
