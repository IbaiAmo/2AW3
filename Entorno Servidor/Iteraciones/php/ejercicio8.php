<?php
/*
Se recibirá un dato llamado pares por GET que contendrá TRUE o FALSE.
Si es TRUE, mostrar en pantalla números pares del 1 
al número aleatorio menor que 99 si se le ha recibido  el valor 
FALSE en la pantalla tienen que aparecer los valores impares.
*/

$par = $_GET['pares'];
$numRandom = rand(1,99);

echo "Número aleatorio: $numRandom <br>";

if($par == "TRUE"){
    $parImpar = 0;
}else{
    $parImpar = 1;
}

for($i = 1; $i < $numRandom; $i++){
    if($i % 2 == $parImpar){
        echo $i . ", ";
    }
}

?>