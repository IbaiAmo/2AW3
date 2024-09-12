<?php
/**
 * Contar vocales: Escribe un programa que reciba una cadena de texto y cuente cuántas vocales (a, e, i, o, u) tiene.
 */

$string = "Holaaa mundo";
$vocales = array("a","e","i","o","u");
$contador = 0;

for($i = 0; $i < count($vocales); $i++){
    $contador += substr_count($string, $vocales[$i]);
 }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 11</title>
</head>
<body>
    <h1>Ejercicio 11</h1>
    <p><?="$string tiene $contador vocales."?></p>
</body>
</html>