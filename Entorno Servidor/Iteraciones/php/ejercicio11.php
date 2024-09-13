<?php
/*
El servidor recibirá un número. Tenemos que sacar por pantalla todos los 
números primos que hay desde el 1 hasta ese número.
*/

$num = $_GET['num'];

function esPrimo($numero){
    $primo = true;
    for($i = $numero - 1; $i > 1; $i--){
        if ($numero % $i == 0){
            $primo = false;
        }
    }

    if($primo){
        return true;
    }else{
        return false;
    }
}

echo "Números primos entre 1 y $num:<br>";
echo "<ul>";
    for ($i = 1; $i < $num; $i++){
        $bool = esPrimo($i);
        if($bool){
            echo "<li>$i</li>";
        }
    }
echo "</ul>";
?>