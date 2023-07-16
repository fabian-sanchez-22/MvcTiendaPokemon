<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./assets/img/pikachu.ng" type="image/x-icon">
    <link rel="stylesheet" href="./assets/css/all.min.css">
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/carrusel.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <script src="./assets/js/all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="./assets/js/bootstrap.min.js"></script>
    <script src="./assets/js/scriptIndex.js"></script>
    <script src="./assets/js/scriptTypes.js"></script>
    <script src="./assets/js/scriptPokeDetalle.js"></script>
    <script src="./assets/js/script.js"></script>
    <script src="./assets/js/axios.min.js"></script>
    <script src="./assets/js/login.validate.js"></script>

    <title>Pokemon store</title>
</head>

<body class="container-fluid bg-white p-2 text-dark bg-opacity-10" ; onload="slideCatPokemon(), loadAllPokemon(), traerCompra(), totalCompra(), mostrarCategorias(), mostrarPokemon()">
    <div class="container-fluid bg">
        <div class="d-flex align-contents-center justify-content-around" style="margin-top: 17px;">
            <div class="row col-3">
                <div id="mostrarCategoriasPokemon">
                </div>
            </div>
            <div class="col-1 d-flex align-items-center justify-content-end">
                <i class="fa-solid fa-magnifying-glass fa-2xl" style="color: #FFFF00;"></i>
            </div>
            <div class="col-4 flex-column my-2 me-5">

                <input type="text" class="form-control" style="border-radius: 13px;" name="txtBuscar" id="txtBuscar" onkeyup="autoCompletePokemon()">
                <div class="col-8" id="listPokemon"></div>
            </div>
            <div class="col-3 d-flex justify-content-around">

                <button type="button" class="btn btn-warning position-relative" ondrop="drop(event)" ondragover="allowDrop(event)" id="btnCar" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i class="fa-solid fa-cart-shopping fa-lg"></i>

                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="cantidadItems">
                        0
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </button>

                <button  type="button" class="btn btn-warning"  onclick="window.location.href = 'login.php';">Iniciar sesión</button>
                <button  onclick="deleteLogin()" type="button" class="btn btn-warning"><i class="fa-solid fa-right-from-bracket"></i></button>

</div>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style="margin-top: 60px;">
                    <div class="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Lista de compras</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body" id="listcarpokemon">

                    </div>
                    <div class="offcanvas-footer text-center">
                        <span id="totalPagar">Total: </span>
                        <hr>
                        <a href="pedido.frm.php" class="btn btn-sm btn-warning mb-1">Finalizar compra</a>
                    </div>
                </div>
            </div>


        </div>