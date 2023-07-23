<?php
session_start();
$idUsuario = isset($_SESSION["idUsuario"]) ? $_SESSION["idUsuario"] : "";

echo json_encode(array("id" => $idUsuario));