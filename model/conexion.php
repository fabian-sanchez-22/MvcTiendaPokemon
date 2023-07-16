<?php

class Conexion
{
    private $host = "localhost";
    private $user = "root";
    private $pass = "";
    private $db = "pokemonnoche";
    private $conPDO;

    public function __construct(){
        try {
            $this->conPDO = new PDO(
                "mysql:dbname=$this->db;
            host=$this->host", $this->user,
                $this->pass
            );

        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }

    }

    /**
     * Get the value of conPDO
     */
    public function getConPDO()
    {
        return $this->conPDO;
    }
}