<?php
/*
Elabore un programa que imprima la figura de un triángulo rectángulo de $numLineas lineas ajustada a la izquierda, 
formada por letras “o”. El valor del número de líneas se enviará al servidor mediante GET.
*/

$longitud = $_GET['longitud'];

for ($f = 1; $f <= $longitud; $f++){
    for($c = 0; $c < $f; $c++){
        echo "o";
    }
    echo "<br>";
}
?>