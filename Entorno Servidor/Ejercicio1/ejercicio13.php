<?php
//Palíndromo: Escribe un programa que determine si una palabra es un palíndromo (se lee igual de adelante hacia atrás).
$texto = "manzana"; //ojo es palíndromo
$textoInvertido = strrev($texto);

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 13</title>
</head>
<body>
    <h1>Ejercicio 13</h1>
    <p>
        <?php
            if($texto == $textoInvertido){
                echo "$texto es una palabra palíndroma";
            }else{
                echo "$texto no es una palabra palíndroma";
            }
    
        ?>
    </p>
</body>
</html>