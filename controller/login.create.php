<?php

include_once "../model/usuario.php";

$correo = $_GET["correo"];
$pass = $_GET["password"];

$usuarioM = new \modelo\Usuario;
$usuarioM->setCorreo($correo);
$usuarioM->setPassword($pass);
$response = $usuarioM->login();




if(isset($response) AND !empty($response)){
    session_start();
$_SESSION["nombre"] = $response[0]["nombre"];
$_SESSION["correo"] = $response[0]["correo"];
$_SESSION["idUsuario"] = $response[0]["id"];

echo json_encode($response);
}  else {
    echo json_encode(array());
}

unset($response);
unset($usuarioM);