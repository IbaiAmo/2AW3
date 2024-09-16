<?php
/*
Tendremos los datos personales de 2 personas en 6 variables. Cada persona tendrá 3 datos:
nombre, apellido y DNI.
Hay que meter todos los datos en dos arrays ($usuario1, $usuario2) y después visualizarlos por pantalla en formato tabla.
*/
$nombre1 = "Ibai";
$apellido1 = "Amo";
$dni1 = "82734156A";
$nombre2 = "Anton";
$apellido2 = "Tschanz";
$dni2 = "93472812A";
$usuario1 = array($nombre1,$apellido1,$dni1);
$usuario2 = array($nombre2, $apellido2, $dni2);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>

    <style>
        table{
            border-collapse: collapse;
            border: 1px solid;
            text-align: center;
        }
        th, td{
            border: 1px solid;
            padding: 5px 10px;
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <?php
                    for($i = 0; $i < count($usuario1); $i++){
                        echo "<td>$usuario1[$i]</td>";
                    }
                ?>
            </tr>
            <tr>
                <?php
                    for($i = 0; $i < count($usuario2); $i++){
                        echo "<td>$usuario2[$i]</td>";
                    }
                ?>
            </tr>
        </tbody>
    </table>
</body>
</html>