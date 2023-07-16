<!DOCTYPE html>
<html>
<head>
    <title>Pokémon Stock</title>
</head>
<body>
    <h1>Pokémon Stock</h1>
    <?php if ($message): ?>
        <p><?= $message ?></p>
    <?php endif; ?>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Vida</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($pokemonData as $pokemon): ?>
                <tr>
                    <td><?= $pokemon['id'] ?></td>
                    <td><?= $pokemon['nombrePro'] ?></td>
                    <td><?= $pokemon['cantidadPro'] ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
