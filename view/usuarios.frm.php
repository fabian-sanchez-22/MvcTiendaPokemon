<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body onload="selectRol()">
    <div class="row my-5">
        <h1 class="text-center  ">Registrate</h1>
    </div>
    
    <div class="row">
        <div class="col-2">
            <span class="fw-bolder">Tipo Doc:</spam>
        </div>
    
        <div class="col-4">
            <div class="form-floating">
                <select name="selTipoDoc" id="selTipoDoc" class="form-control">
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
                <input type="number" name="txtIdentificacion" id="txtIdentificacion" class="form-control" placeholder=".">
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
                <input type="text" name="txtNombre" id="txtNombre" class="form-control" placeholder=".">
                <label for="floatingInput">Nombre</label>
            </div>
        </div>
    
        <div class="col-2">
            <span class="fw-bolder">Apellido:</spam>
        </div>
        <div class="col-4">
            <div class="form-floating">
                <input type="text" name="txtApellido" id="txtApellido" class="form-control" placeholder=".">
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
                <input type="email" name="txtCorreo" id="txtCorreo" class="form-control" placeholder=".">
                <label for="floatingInput">Correo</label>
            </div>
        </div>
    
        <div class="col-2">
            <span class="fw-bolder">Contraseña:</spam>
        </div>
        <div class="col-4">
            <div class="form-floating">
                <input type="password" name="txtContrasena" id="txtContrasena" class="form-control" placeholder=".">
                <label for="floatingInput">Contraseña</label>
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

    <a style="margin-left: 600px;" href="login.php">Ir a iniciar sesion</a>
</body>
</html>


<script src="./assets/js/usuario.js"></script>
<script src="./assets/js/axios.min.js"></script>
<link rel="stylesheet" href="./assets/css/bootstrap.css">



