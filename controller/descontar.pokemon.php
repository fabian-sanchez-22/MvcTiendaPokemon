<?php

include_once "../model/inventario.php";

$idPokemon = json_decode($_POST["idPokemon"]);
$cantidad = json_decode($_POST["cantidad"]);

$inventarioM = new \modelo\Inventario();
$inventarioM->setId($idPokemon);
$inventarioM->setCantidad($cantidad);
$response = $inventarioM->descontar();

echo json_encode($response);
unset($inventarioM);
unset($response);

