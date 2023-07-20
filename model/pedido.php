<?php

namespace modelo;

include_once "conexion.php";

class Pedido 
{
    // Atributos del pedido
    private $codigoPed;
    private $fechaPed;
    private $nombre;
    private $direccion;
    private $telefono;
    private $formaPago;
    private $fechaEnvPedido;
    private $total;
    private $idUsu;
    
    private $conexion;


    public function __construct()
    {
        $this->conexion = new \Conexion;
    }

    public function createProduct()
    {
        try {
            $sql = $this->conexion->getConPDO()->prepare("INSERT INTO pedidos(codigoPed, fechaPed, nombre, direccion, telefono, formaPago, totalPed, fechaEnvPedido, idUsu) VALUES (?,?,?,?,?,?,?,?,?)");
            $sql->bindParam(1, $this->codigoPed);
            $sql->bindParam(2, $this->fechaPed);
            $sql->bindParam(3, $this->nombre);
            $sql->bindParam(4, $this->direccion);
            $sql->bindParam(5, $this->telefono);
            $sql->bindParam(6, $this->formaPago);
            $sql->bindParam(7, $this->total);
            $sql->bindParam(8, $this->fechaEnvPedido);
            $sql->bindParam(9, $this->idUsu);
            $sql->execute();
            return "Producto Creado";
        } catch (\PDOException $e) {
            return "Error  " . $e->getMessage();
        }
    }

    /**
     * Get the value of codigoPed
     */
    public function getCodigoPed()
    {
        return $this->codigoPed;
    }

    /**
     * Set the value of codigoPed
     */
    public function setCodigoPed($codigoPed)
    {
        $this->codigoPed = $codigoPed;
    }

    /**
     * Get the value of fechaPed
     */
    public function getFechaPed()
    {
        return $this->fechaPed;
    }

    /**
     * Set the value of fechaPed
     */
    public function setFechaPed($fechaPed)
    {
        $this->fechaPed = $fechaPed;
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
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    /**
     * Get the value of direccion
     */
    public function getDireccion()
    {
        return $this->direccion;
    }

    /**
     * Set the value of direccion
     */
    public function setDireccion($direccion)
    {
        $this->direccion = $direccion;
    }

    /**
     * Get the value of telefono
     */
    public function getTelefono()
    {
        return $this->telefono;
    }

    /**
     * Set the value of telefono
     */
    public function setTelefono($telefono)
    {
        $this->telefono = $telefono;
    }

    /**
     * Get the value of fechaEnvPedido
     */
    public function getFechaEnvPedido()
    {
        return $this->fechaEnvPedido;
    }

    /**
     * Set the value of fechaEnvPedido
     */
    public function setFechaEnvPedido($fechaEnvPedido)
    {
        $this->fechaEnvPedido = $fechaEnvPedido;
    }

    /**
     * Get the value of total
     */
    public function getTotal()
    {
        return $this->total;
    }

    /**
     * Set the value of total
     */
    public function setTotal($total)
    {
        $this->total = $total;
    }

    /**
     * Get the value of formaPago
     */
    public function getFormaPago()
    {
        return $this->formaPago;
    }

    /**
     * Set the value of formaPago
     */
    public function setFormaPago($formaPago): self
    {
        $this->formaPago = $formaPago;

        return $this;
    }

    /**
     * Get the value of idUsu
     */
    public function getIdUsu()
    {
        return $this->idUsu;
    }

    /**
     * Set the value of idUsu
     */
    public function setIdUsu($idUsu): self
    {
        $this->idUsu = $idUsu;

        return $this;
    }
}
