<?php
//Contar palabras. Escribe un programa que cuente cuántas palabras tiene una oración. Las palabras están separadas por espacios.
$texto = "Ayer suspendí programación con un 4";
$contador = str_word_count($texto);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 14</title>
</head>
<body>
    <h1>Ejercicio 14</h1>
    <p><?="'$texto' tiene $contador palabras."?></p>
</body>
</html>