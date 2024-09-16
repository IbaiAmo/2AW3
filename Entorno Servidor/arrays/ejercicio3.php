<?php
/*
Para realizar este ejercicio copiar y renombrar el ejercicio02.
Nuestra zapatería pondrá rebajas. Hay que cambiar los precios de todos los productos. 
La rebaja estará guardada en una variable y será un tanto por ciento. (20%, 50%,...) ejemplo: $rebaja = 20;
Por pantalla se imprimirán los  productos con viejo y el precio nuevo, los nuevos precios 
se guardarán en el array de precios (al finalizar el programa el array de precios quedará con los los precios nuevos).
*/

$productos = array("zapatos1","zapatos2","zapatos3","zapatos4","zapatos5");
$precios = array(60,50,100,35,80);
$rebaja = 20;

echo "Precios viejos:<br>";
for($i = 0; $i < count($productos); $i++){
    echo $productos[$i] . " => " . $precios[$i] . "€<br>";
}

echo "<br>Precios nuevos:<br>";
for($x = 0; $x < count($productos); $x++){
    $precios[$x] -= ($precios[$x] * $rebaja / 100);
    echo $productos[$x] . " => " . $precios[$x] . "€<br>";
}
?>