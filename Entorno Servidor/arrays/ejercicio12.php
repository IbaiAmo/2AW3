<?php
/*
Programa que guarde 50 números aleatorios (rango del 0 al 49) en una tabla
Luego tiene que indicar cuántas veces aparece cada número en el array.
*/

$nums = [];
$numRepetidos = [];
$cont = 0;

for ($i = 0; $i < 50; $i++){
    $nums[] += rand(0,49);
}


foreach($nums as $num){
    for($i = 0; $i < count($nums); $i++){
        if ($nums[$i] == $num){
            $cont++;
        }
    }
    $numRepetidos += [$num => $cont];
    $cont = 0;
}

foreach($numRepetidos as $num => $valor){
    echo "El número " . $num . " ha salido " . $valor . " veces<br>";
}

?>