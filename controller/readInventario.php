<?php
include_once "../model/usuario.php";

$usuarioM = new \modelo\Usuario;
$response = $usuarioM->readInventario();

echo json_encode($response);
unset($usuarioM);
unset($response);
