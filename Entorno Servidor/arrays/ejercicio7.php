<?php
/*
Hasta ahora para visualizar el contenido de una variable hemos utilizado echo o print. 
En el caso de los arrays se puede utilizar la orden print_r($array) para visualizar el contenido del array junto con su índice. 
Se debe realizar un programa que cree un array con 10 números aleatorios (números entre 1 y 200) 
los imprima de las dos formas que aparecen en pantalla y después los imprima al revés.
*/  

$numeros = array();
echo "Relación de números aleatorios:<br>";
for ($i = 0; $i < 10; $i++){
    $numeros[] = rand(1,200);
    echo $numeros[$i] . " ";
}

echo "<br>Otra forma de visualizar los datos de un array:<br>";
print_r($numeros);
echo "<br>Relación de números aleatorios al revés:<br>";

$numReves = array_reverse($numeros);
for ($i = 0; $i < 10; $i++){
    echo $numReves[$i] . " ";
}
?>