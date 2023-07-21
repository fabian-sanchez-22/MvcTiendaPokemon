<?php
include_once "../model/pedido.php";

$pedidoM = new \modelo\Pedido;
$response = $pedidoM->readUsuario();

echo json_encode($response);
unset($pedidoM);
unset($response);
