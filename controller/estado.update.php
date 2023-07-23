<?php

include_once "../model/pedido.php";

$idUsu = $_POST["idUsu"];
$codigoPedido = $_POST["codigoPed"];
$estadoActualizado = $_POST["estadoActualizado"];


$pedidoM = new \modelo\Pedido();
$pedidoM->setIdUsu($idUsu);
$pedidoM->setCodigoPed($codigoPedido);
$pedidoM->setEstadoPedido($estadoActualizado);

$response = $pedidoM->updateEstado();

echo json_encode($response);
unset($pedidoM);
unset($response);
