<?php
//Mostrar en pantalla números del 1 al 100 Con While y con For
$contador = 1;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
</head>
<body>
    <p>While:
    <?php 
        while($contador <= 100){
            echo $contador . "  ";
            $contador++;
        }
    ?>
    </p>

    <p>For:
    <?php 
        for($i = 1; $i <= 100; $i++){
            echo $i . "  ";
        }
    ?>
    </p>

</body>
</html>
