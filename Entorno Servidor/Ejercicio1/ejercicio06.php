<?php
$numero1 = 5;
$numero2 = 3;
$producto = $numero1 * $numero2;
$suma = $numero1 + $numero2;
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 6</title>
</head>
<body>
    <h1>Ejercicio 6</h1>
    <ul>
        <li><?="Número 1 --> $numero1"?></li>
        <li><?="Número 2 --> $numero2"?></li>
    </ul>
    <p>
        <?php
        if ($producto > $numero1 + $numero2){
            echo "El producto es mayor que la suma";
        }else{
            echo "La suma es mayor que el producto";
        }
        ?>
    </p>
</body>
</html>