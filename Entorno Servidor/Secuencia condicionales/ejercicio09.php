<?php
//Definir dos notas en dos variables y calcular si la media es aprobada o suspendida.
$nota1 = 7.5;
$nota2 = 2;
$media = ($nota1 + $nota2) / 2;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 9</title>
</head>
<body>
    <h1>Ejercicio 9</h1>
    <p>
        <?php
            if ($media >= 5){
                echo "Has aprobado con un " . $media;
            }else{
                echo "Has suspendido con un " . $media;
            }
        ?>
    </p>
</body>
</html>