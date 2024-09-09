<?php
/*
Realiza la suma desde un número (primerNum) hasta otro (ultimoNum)
Con While y con For
*/

$primerNum = 4;
$ultimoNum = 9;

$suma;$siguiente;
$contador = $primerNum;

while ($contador < $ultimoNum){
    $siguiente = $contador + 1;
    $suma = $contador + $siguiente;
    echo "$primerNum + $siguiente = $suma <br>";
    
    $primerNum = $suma;
    $contador++;
}

?>