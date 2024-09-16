<?php
/*
En una zapatería sólo se venden 5 productos. Tengo los productos y los precios guardados en 2 
arrays (en uno los productos y en otro los precios). Hay que visualizar cada producto con su precio.
*/

$productos = array("zapatos1","zapatos2","zapatos3","zapatos4","zapatos5");
$precios = array(60,50,100,35,80);

for($i = 0; $i < count($productos); $i++){
    echo $productos[$i] . " => " . $precios[$i] . "€<br>";
}
?>