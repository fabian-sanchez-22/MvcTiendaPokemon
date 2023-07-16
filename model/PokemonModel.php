<?php

class PokemonModel
{
    public function fetchAllPokemonData()
    {
        $pokemonData = [];
        $limit = 10;
        $currentPage = 1;

        do {
            $pokemonPageData = $this->fetchPokemonData($currentPage, $limit);
            $pokemonData = array_merge($pokemonData, $pokemonPageData);
            $currentPage++;
        } while (!empty($pokemonPageData));

        return $pokemonData;
    }

    public function fetchPokemonData($page = 1, $limit = 10)
    {
        $offset = ($page - 1) * $limit;
        $url = "https://pokeapi.co/api/v2/pokemon?offset=$offset&limit=$limit";
        $response = file_get_contents($url);

        if ($response === false) {
            return [];
        }

        $data = json_decode($response, true);
        $pokemonData = [];

        foreach ($data['results'] as $pokemon) {
            $pokemonDetails = $this->fetchPokemonDetails($pokemon['url']);
            if ($pokemonDetails) {
                $pokemonData[] = [
                    'id' => $pokemonDetails['id'],
                    'nombrePro' => $pokemon['name'],
                    'cantidadPro' => $pokemonDetails['stats'][0]['base_stat'], // La vida es el primer atributo en la lista de stats
                ];
            }
        }

        return $pokemonData;
    }

    public function fetchPokemonDetails($url)
    {
        $response = file_get_contents($url);

        if ($response === false) {
            return null;
        }

        $data = json_decode($response, true);
        return $data;
    }

    public function insertPokemonData($pokemonData)
    {
        // Configura la conexión a la base de datos (modifica según tus datos de acceso)
        $host = "localhost";
        $username = "root";
        $password = "";
        $database = "pokemonnoche";

        $conn = new mysqli($host, $username, $password, $database);

        // Verificar la conexión
        if ($conn->connect_error) {
            die("Error en la conexión a la base de datos: " . $conn->connect_error);
        }

        // Preparar la consulta para insertar los datos
        $sql = "INSERT INTO producto (id, nombrePro, cantidadPro) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);

        // Vincular los parámetros
        $stmt->bind_param("iss", $id, $name, $life);

        // Insertar los datos de cada Pokémon en la base de datos
        foreach ($pokemonData as $pokemon) {
            $id = $pokemon['id'];
            $name = $pokemon['nombrePro'];
            $life = $pokemon['cantidadPro'];

            $stmt->execute();
        }

        // Cerrar la conexión y liberar recursos
        $stmt->close();
        $conn->close();

        return true;
    }
}
