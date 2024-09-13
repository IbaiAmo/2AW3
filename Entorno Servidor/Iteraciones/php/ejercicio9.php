<?php
/*
Escribir un programa, que reciba  un número, y visualice 
la tabla de multiplicación correspondiente de 1 a 10.
*/

$num = $_GET['num'];

for ($i = 1; $i <= 10; $i++){
    echo "$num x $i = " . $num*$i . "<br>";
}

?>