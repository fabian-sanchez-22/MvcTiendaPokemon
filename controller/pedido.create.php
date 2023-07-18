<?php
include_once "../model/pedido.php";

$codigoPed = $_POST["codigoPed"];
$fechaPed = $_POST["fechaPed"];
$nombre = $_POST["nombre"];
$direccion = $_POST["direccion"];
$telefono = $_POST["telefono"];
$formaPago = $_POST["formaPago"];
$fechaEnvPedido = $_POST["fechaEnvPedido"];
$total = $_POST["total"];

$pedidoM = new \modelo\Pedido;

$pedidoM->setcodigoPed($codigoPed);
$pedidoM->setfechaPed($fechaPed);
$pedidoM->setnombre($nombre);
$pedidoM->setdireccion($direccion);
$pedidoM->settelefono($telefono);
$pedidoM->setformaPago($formaPago);
$pedidoM->setfechaEnvPedido($fechaEnvPedido);
$pedidoM->settotal($total);


$response = $pedidoM->createProduct();

echo json_encode($response);
unset($pedidoM);
unset($response);