<?php
/*
Crear un programa que imprima la figura de un triángulo rectángulo de 10 líneas ajustada a la izquierda, formada por letras “o”. 
*/
$longitud = 10;

for ($f = 1; $f <= $longitud; $f++){
    for($c = 0; $c < $f; $c++){
        echo "o";
    }
    echo "<br>";
}

?>