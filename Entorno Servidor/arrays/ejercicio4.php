<?php
/*
Guarda en un array 10 números y saca el número más grande de todos ellos
*/
$numeros = array();
echo "Números: <br>";
for ($i = 0; $i < 10; $i++){
    $numeros[] = rand(1,99);
    echo $numeros[$i] . " ";
}

echo "<br>Número más grande del array: " . max($numeros);
?>