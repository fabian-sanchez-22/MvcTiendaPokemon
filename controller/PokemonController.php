<?php

require_once '../model/PokemonModel.php';

class PokemonController
{
    public function index()
    {
        $model = new PokemonModel();
        $pokemonData = $model->fetchAllPokemonData();
        $message = "";

        if (!empty($pokemonData)) {
            $success = $model->insertPokemonData($pokemonData);

            if ($success) {
                $message = "Datos de Pokémon almacenados correctamente en la base de datos.";
            } else {
                $message = "Error al almacenar los datos de Pokémon en la base de datos.";
            }
        } else {
            $message = "Error al obtener los datos de la API de Pokémon.";
        }

        include '../view/indexInventario.php';
    }
}
