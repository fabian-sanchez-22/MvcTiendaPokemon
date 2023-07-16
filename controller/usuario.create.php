<?php
include_once "../model/usuario.php";

$tipoDoc = $_POST["tipoDoc"];
$identificacion = $_POST["identificacion"];
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$correo = $_POST["correo"];
$password = $_POST["password"];
$direccion = $_POST["direccion"];
$telefono = $_POST["telefono"];
$genero = $_POST["genero"];
$rol = $_POST["rol"];

$usuarioM = new \modelo\Usuario;

$usuarioM->setTipoDoc($tipoDoc);
$usuarioM->setIdentificacion($identificacion);
$usuarioM->setNombre($nombre);
$usuarioM->setApellido($apellido);
$usuarioM->setCorreo($correo);
$usuarioM->setPassword($password);
$usuarioM->setDireccion($direccion);
$usuarioM->setTelefono($telefono);
$usuarioM->setGenero($genero);
$usuarioM->setRol($rol);


$response = $usuarioM->create();

echo json_encode($response);
unset($usuarioM);
unset($response);