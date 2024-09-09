<?php
//Mostrar en pantalla números pares del 100 al 1 Con While y con For
$contador = 100;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>
<body>

<p>While:
    <?php
        while($contador >= 1){
            if($contador % 2 == 0){
                echo $contador . " ";
            }
            $contador--;
        }
    ?>
</p>

<p>For:
    <?php
        for($i = 100; $i >= 1; $i--){
            if ($i % 2 == 0){
                echo $i . " ";
            }
        }
    ?>
</p>

</body>
</html>
