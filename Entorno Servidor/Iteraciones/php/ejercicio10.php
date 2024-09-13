<?php
/*
El servidor recibirá un número. El programa tendrá que decirnos si es primo o no.
*/

$num = $_GET['num'];
$esPrimo = true;

for($i = $num - 1; $i > 1; $i--){
    if ($num % $i == 0){
        $esPrimo = false;
    }
}

if($esPrimo){
    echo "$num es un número primo";
}else{
    echo "$num no es un número primo";
}
?>