<?php
//Reemplazar caracteres: Haz un programa que reciba una cadena de texto y reemplace todas las vocales por un carácter específico.
$texto = "Estoy aprendiendo php";
$vocales = array("a","e","i","o","u", "A","E","I","O","U");
$textoNuevo = str_replace($vocales,"p",$texto);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 15</title>
</head>
<body>
    <h1>Ejercicio 15</h1>
    <p><?="texto recibido: $texto"?></p>
    <p><?="texto cambiado: $textoNuevo"?></p>
</body>
</html>