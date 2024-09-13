<?php
/*
Realiza la suma desde un número (primerNum) hasta otro (ultimoNum). 
Los valores de los dos parámetros se enviarán por GET.
*/

$primerNum = $_GET['num1'];
$ultimoNum = $_GET['num2'];
$numTotal = 0;
$diferencia = 0;

echo "While:<br>";
if ($primerNum > $ultimoNum){
    $diferencia = $primerNum - $ultimoNum;
    $primerNum -= $diferencia;
    $ultimoNum += $diferencia;
}

while($primerNum < $ultimoNum){
    $numTotal += $primerNum;
    $primerNum++;
    echo $primerNum . " + " . $numTotal . " = " . ($numTotal + $primerNum) . "<br>";
}
?>