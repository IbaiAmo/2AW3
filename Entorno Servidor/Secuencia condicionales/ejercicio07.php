<?php
$nota = 9;
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 7</title>
</head>
<body>
    <h1>Ejercicio 7</h1>
    <h3>Tu nota: <?=$nota?></h3>
    <p>
        <?php
        if($nota >=1 && $nota <= 4.9){
            echo "Suspenso";
        }elseif($nota >=5 && $nota <= 5.9){
            echo "Suficiente";
        }elseif($nota >=6 && $nota <= 6.9){
            echo "Bien";
        }elseif($nota >=7 && $nota <= 8.9){
            echo "Notable";
        }elseif($nota >=9 && $nota <= 10){
            echo "Sobresaliente";
        }else{
            echo "ERROR";
        }
        ?>
    </p>
</body>
</html>