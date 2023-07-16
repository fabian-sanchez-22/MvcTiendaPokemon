<?php

session_start();

if (isset($_SESSION["correo"]) and !empty($_SESSION["correo"])) {
    echo json_encode(true);
} else {
    echo json_encode(false);
}