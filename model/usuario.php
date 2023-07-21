<?php
namespace modelo;

include_once "conexion.php";



class Usuario
{




    private $id;
    private $tipoDoc;
    private $identificacion;
    private $nombre;
    private $apellido;
    private $correo;
    private $password;
    private $direccion;
    private $telefono;
    private $genero;
    private $rol;
    private $estado = 'A';

    private $idUsu;
    
    private $conexion;

    public function __construct()
    {
        $this->conexion = new \Conexion;
    }



    public function create()
    {

        try {
            $sql = $this->conexion->getConPDO()->prepare("INSERT INTO usuarios(tipoDoc, identificacion, nombre, apellido, correo, password, direccion, telefono, genero, idRol, estado) VALUES (?,?,?,?,?,?,?,?,?,?,?)");
            $sql->bindParam(1, $this->tipoDoc);
            $sql->bindParam(2, $this->identificacion);
            $sql->bindParam(3, $this->nombre);
            $sql->bindParam(4, $this->apellido);
            $sql->bindParam(5, $this->correo);
            $sql->bindParam(6, $this->password);
            $sql->bindParam(7, $this->direccion);
            $sql->bindParam(8, $this->telefono);
            $sql->bindParam(9, $this->genero);
            $sql->bindParam(10, $this->rol);
            $sql->bindParam(11, $this->estado);
            $sql->execute();
            return "Usuario Creado";

        } catch (\PDOException $e) {
            return "Error  " . $e->getMessage();
        }
    }




    public function login()
    {
        try {
            $sql = $this->conexion->getConPDO()->prepare("SELECT * FROM usuarios WHERE estado='A' AND correo=? AND password=?");
            $sql->bindParam(1, $this->correo);
            $sql->bindParam(2, $this->password);
            $sql->execute();
            $result = $sql->fetchAll(\PDO::FETCH_ASSOC);
            return $result;

        } catch (\PDOException $err) {
            return "Error: " + $err->getMessage();
        }
    }


    


    public function readInventario(){
        try {
            $sql = $this->conexion->getConPDO()->prepare("SELECT * FROM pokemons");
            $sql->execute();
            $result = $sql->fetchAll(\PDO::FETCH_ASSOC);
            return $result;
        } catch (\PDOException $e) {
            return "Error" . $e->getMessage();
        }
    }


    // public function readUsuario()
    // {
    //     try {
    //         $sql = $this->conexion->getConPDO()->prepare("SELECT nombre, apellido FROM tablaUsuarios WHERE id=?");
    //         $sql->bindParam(1, $this->id);
    //         $sql->execute();
    //         $result = $sql->fetchAll(\PDO::FETCH_ASSOC);
    //         return $result;
    //     } catch (\PDOException $e) {
    //         return "Error" . $e->getMessage();
    //     }
    // }



  


    /**
     * Get the value of rol
     */
    public function getRol()
    {
        return $this->rol;
    }

    /**
     * Set the value of rol
     */
    public function setRol($rol): self
    {
        $this->rol = $rol;

        return $this;
    }

    /**
     * Get the value of genero
     */
    public function getGenero()
    {
        return $this->genero;
    }

    /**
     * Set the value of genero
     */
    public function setGenero($genero): self
    {
        $this->genero = $genero;

        return $this;
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
    public function setTelefono($telefono): self
    {
        $this->telefono = $telefono;

        return $this;
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
    public function setDireccion($direccion): self
    {
        $this->direccion = $direccion;

        return $this;
    }

    /**
     * Get the value of password
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set the value of password
     */
    public function setPassword($password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get the value of correo
     */
    public function getCorreo()
    {
        return $this->correo;
    }

    /**
     * Set the value of correo
     */
    public function setCorreo($correo): self
    {
        $this->correo = $correo;

        return $this;
    }

    /**
     * Get the value of apellido
     */
    public function getApellido()
    {
        return $this->apellido;
    }

    /**
     * Set the value of apellido
     */
    public function setApellido($apellido): self
    {
        $this->apellido = $apellido;

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
     * Get the value of identificacion
     */
    public function getIdentificacion()
    {
        return $this->identificacion;
    }

    /**
     * Set the value of identificacion
     */
    public function setIdentificacion($identificacion): self
    {
        $this->identificacion = $identificacion;

        return $this;
    }

    /**
     * Get the value of tipoDoc
     */
    public function getTipoDoc()
    {
        return $this->tipoDoc;
    }

    /**
     * Set the value of tipoDoc
     */
    public function setTipoDoc($tipoDoc): self
    {
        $this->tipoDoc = $tipoDoc;

        return $this;
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