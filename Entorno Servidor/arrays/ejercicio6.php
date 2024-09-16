<?php
/*
Guarda en un array 10 numeros aleatorios entre 0 y 99 y sacar la media.
*/

$numeros = array();
echo "Números: <br>";
for ($i = 0; $i < 10; $i++){
    $numeros[] = rand(0,99);
    echo $numeros[$i] . " ";
}

echo "<br>Media de los números del array: " . array_sum($numeros)/count($numeros);
?>