<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/css/bootstrap.css">
    <script src="./assets/Js/bootstrap.js"></script>
    <script src="./assets/Js/axios.min.js"></script>
</head>

<body>
    <div class="container-fluid">
        <h1 class="text-center  mt-5 mb-5">Inicio de sesion</h1>
        <div class="row">
            <label class="form-label" for="">Correo</label>
            <input class="form-control" type="email" name="txtCorreo" id="txtCorreo">
        </div>

        <div class="row">
            <label class="form-label" for="">Password</label>
            <input class="form-control" type="password" name="txtPassword" id="txtPassword">
        </div>

        <div class="row mt-3">
            <input onclick="login()" class="btn btn-primary" type="button" value="Iniciar">

        </div>

        <div>
            <a style="margin-left: 600px;" href="usuarios.frm.php">Crear una cuenta</a>
        </div>

</body>

</html>

<script src="./assets/js/login.js"></script>