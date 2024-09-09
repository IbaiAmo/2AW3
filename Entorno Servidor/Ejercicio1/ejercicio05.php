<?php
$numero = 6;
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 5</title>
</head>
<body>
    <h1>Ejercicio 5</h1>
    <P>
        <?php
        if ($numero % 2 == 0){
            echo "$numero es un número par";
        }else{
            echo "$numero es un numero impar";
        }
        ?>
    </P>
</body>
</html>