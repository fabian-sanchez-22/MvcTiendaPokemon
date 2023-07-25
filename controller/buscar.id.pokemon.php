<?php

include_once "../model/pedido.php";

$idPoke = $_GET["idPoke"];

$pedidoM = new \modelo\Pedido();
$pedidoM->setIdPokemon($idPoke);
$response = $pedidoM->accederId();

echo json_encode($response);
unset($pedidoM);
unset($response);