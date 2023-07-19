<?php
include_once "../model/inventario.php";

$id = $_POST["id"];
$cantidad = $_POST["cantidad"];


$inventarioM = new \modelo\Inventario;

$inventarioM->setId($id);
$inventarioM->setCantidad($cantidad);



$response = $inventarioM->updateStock();

echo json_encode($response);
unset($inventarioM);
unset($response);