<?php
/*
Tendremos los datos personales de 2 personas en 6 variables. Cada persona tendrá 3 datos:
nombre, apellido y DNI.
Hay que meter todos los datos en un array asociativo donde los índices sean “nombre”, 
“apellido”, “DNI” y después visualizarlos por pantalla en formato tabla.
*/

$nombre1 = "Ibai";
$apellido1 = "Amo";
$dni1 = "82734156A";
$nombre2 = "Anton";
$apellido2 = "Tschanz";
$dni2 = "93472812A";
$usuarios = array(
    "nombre" => $nombre1,
    "apellido" => $apellido1,
    "dni" => $dni1,
    "nombre2" => $nombre2,
    "apellido2" => $apellido2,
    "dni2" => $dni2);
$cont = 0;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 8</title>

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
                <?php
                    foreach($usuarios as $item => $value){
                        
                        if ($cont % 3 == 0){
                            echo "<tr>";
                        }
                            echo "<td>$value</td>";
                        
                        $cont++;
                    }
                ?>
            
        </tbody>
    </table>
</body>
</html>
