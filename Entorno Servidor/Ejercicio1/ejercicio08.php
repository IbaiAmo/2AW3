<?php
/*Diseñar un programa que determine la cantidad total a pagar por una llamada telefónica de acuerdo a las siguientes premisas:
Toda llamada que dure menos de 3 minutos tiene un coste de 10 céntimos.
Cada minuto adicional a partir de los 3 primeros es un paso de contador y cuesta 5 céntimos.
*/
$costeLlamada = 0.1;
$minutos = 8;

if ($minutos > 3){
    $costeLlamada += ($minutos - 3) * 0.05;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 8</title>
</head>
<body>
    <h1>Ejercicio 8</h1>
    <p><?="Duración de la llamada: $minutos minutos"?></p>
    <p><?="Coste de la llamada: $costeLlamada €"?></p>
</body>
</html>