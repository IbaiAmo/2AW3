<?php
/*
En este programa tendrás que utilizar un array asociativo 
para guardar como key cada día de la semana y asociar a cada día un valor entero. 
Se trandrá que mostrar en pantalla cada día y valor almacenado en el array así como la suma y 
media de todos los valores guadados en el array.
*/

$semana = array(
    "Lunes" => 20,
    "Martes" => 70,
    "Miércoles" => 46,
    "Jueves" => 23,
    "Viernes" => 80,
    "Sábado" => 34,
    "Domingo" => 11,
);

$suma = 0;

foreach($semana as $key => $value){
    echo $key . ": " . $value . "<br>";
    $suma += $value;
}

echo "<br>Suma: " . $suma . "<br>";
echo "Media: " . $suma / count($semana);



?>