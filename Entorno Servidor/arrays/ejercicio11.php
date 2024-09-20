<?php
/*
Crea un array asociativo y ordenalo dependiendo del key y del valor. Para ello has de utilizar las funciones ksort y natsort.
*/

$nombres = array(
    "Ibai" => "Manzana",
    "Aitor" => "Plátano",
    "Anton" => "Limón",
    "Robert" => "Tomate",
    "Pablo" => "Naranja",
    "Jon" => "Uva",
    "Sofia" => "Fresa"
);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 11</title>

    <style>
        *{
            margin: 0;
            box-sizing: border-box;
        }

        h1{
            text-align: center;
        }

        .contenedor{
            display: flex;
            justify-content: center;
            gap: 70px;
            flex-wrap: wrap;
            margin-top: 30px;

            & div{
                border: 2px solid;
                display: flex;
                flex-direction: column;
                align-items: start;
                padding: 10px 20px;
                border-radius: 20px;
                gap: 20px;

                & ul{
                    list-style: none;
                }
            }
        }

    </style>
</head>
<body>
    <h1>Array Asociativo</h1>
    <div class="contenedor">
        <div>
        <h2>Mostrar array</h2>
        <ul>
            <?php
                foreach($nombres as $item => $value){
                    echo "<li>$item<ul><li>$value</li></ul></li>";
                }
            ?>
        </ul>
        </div>

        <div>
        <h2>Ordenar por clave</h2>
        <ul>
            <?php
                ksort($nombres);
                foreach($nombres as $item => $value){
                    echo "<li>$item<ul><li>$value</li></ul></li>";
                }
            ?>
        </ul>
        </div>

        <div>
        <h2>Ordenar por contenido</h2>
        <ul>
            <?php
                natsort($nombres);
                foreach($nombres as $item => $value){
                    echo "<li>$item<ul><li>$value</li></ul></li>";
                }
            ?>
        </ul>
        </div>
    </div>
</body>
</html>