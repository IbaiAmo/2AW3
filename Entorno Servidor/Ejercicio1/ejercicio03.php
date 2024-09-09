<?php
define("PI", pi());
$radio = 5;
$diametro = $radio * 2;
$perimetro = PI * $diametro;
$superficie = PI * $radio**2;
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3</title>
</head>
<body>
    <h1>Ejercicio 3</h1>
    <p><?="La superficie del círculo es de $superficie cm2"?></p>
    <p><?="El perímetro del círculo es de $perimetro cm"?></p>
</body>
</html>