<?php
namespace modelo;

include_once "conexion.php";

class Inventario {

private $id;

private $nombre;

private $cantidad;

private $conexion;

public function __construct()
{
    $this->conexion = new \Conexion;
}





public function updateStock (){

    try {
        $sql = $this->conexion->getConPDO()->prepare("UPDATE pokemons SET life=? WHERE id=?");
            $sql->bindParam(1, $this->cantidad);
            $sql->bindParam(2, $this->id);
            $sql->execute();
            return "Actualizacion Exitosa";
    } catch (\PDOException $e) {
        return "error " . $e->getMessage(); 
    }

}







/**
 * Get the value of id
 */
public function getId()
{
return $this->id;
}

/**
 * Set the value of id
 */
public function setId($id): self
{
$this->id = $id;

return $this;
}

/**
 * Get the value of nombre
 */
public function getNombre()
{
return $this->nombre;
}

/**
 * Set the value of nombre
 */
public function setNombre($nombre): self
{
$this->nombre = $nombre;

return $this;
}

/**
 * Get the value of cantidad
 */
public function getCantidad()
{
return $this->cantidad;
}

/**
 * Set the value of cantidad
 */
public function setCantidad($cantidad): self
{
$this->cantidad = $cantidad;

return $this;
}

/**
 * Get the value of conexion
 */
public function getConexion()
{
return $this->conexion;
}

/**
 * Set the value of conexion
 */
public function setConexion($conexion): self
{
$this->conexion = $conexion;

return $this;
}
}