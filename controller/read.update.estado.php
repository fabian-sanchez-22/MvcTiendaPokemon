<?php

include_once "../model/pedido.php";

$codigoPedido = $_POST["codigoPed"];
$estadoActualizado = $_POST["estadoActualizado"];

$pedidoM = new \modelo\Pedido();

$pedidoM->setCodigoPed($codigoPedido);
$pedidoM->setEstadoPedido($estadoActualizado);

$response = $pedidoM->readUpdateEstado();

echo json_encode($response);
unset($response);
unset($pedidoM);