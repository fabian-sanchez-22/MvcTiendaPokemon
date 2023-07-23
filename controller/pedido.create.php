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
$idUsu = $_POST["idUsu"];

$productos = json_decode($_POST["productos"], true); 

var_dump($productos);

foreach ($productos as $key => $producto) {

  $id = $producto['id'];
  $nombreP = $producto['nombre'];
  $cantidad = $producto['cantidad'];
  $precio = $producto['precio'];

$pedidoM = new \modelo\Pedido;
  $pedidoM->setcodigoPed($codigoPed);
  $pedidoM->setfechaPed($fechaPed);
  $pedidoM->setnombre($nombre);
  $pedidoM->setdireccion($direccion);
  $pedidoM->settelefono($telefono);
  $pedidoM->setformaPago($formaPago);
  $pedidoM->setfechaEnvPedido($fechaEnvPedido);
  $pedidoM->settotal($total);
  $pedidoM->setIdUsu($idUsu);
  $pedidoM->setIdPokemon($id);
  $pedidoM->setNombrePokemon($nombreP);
  $pedidoM->setCantidadPokemon($cantidad);
  $pedidoM->setPrecioPokemon($precio);


  $response = $pedidoM->createProduct();
  unset($pedidoM);
}





