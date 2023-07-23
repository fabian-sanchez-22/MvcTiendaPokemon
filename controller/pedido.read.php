<?php

include_once "../model/pedido.php";

// Obtén el ID de usuario desde la URL
$id = isset($_GET["id"]) ? $_GET["id"] : "";

$pedidoM = new \modelo\Pedido();
$pedidoM->setIdUsu($id);
$response = $pedidoM->readPedidosUsuarios();

echo json_encode($response);
unset($pedidoM);
unset($response);