<?php
/*
Realiza la suma desde un número (primerNum) hasta otro (ultimoNum)
Con While y con For
*/

$primerNum = 4;
$ultimoNum = 9;
$numTotal = 0;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4</title>
</head>
<body>
    <p>
        <?php
            echo "While:<br>";
            while($primerNum < $ultimoNum){
                $numTotal += $primerNum;
                $primerNum++;
                echo $primerNum . " + " . $numTotal . " = " . ($numTotal + $primerNum) . "<br>";
            }
            
        ?>

    </p>

    <p>
        <?php
            $primerNum = 4;
            $numTotal = 0;
            echo "For:<br>";

            for($primerNum; $primerNum < $ultimoNum; $primerNum++) { 
                $numTotal += $primerNum;
                echo $primerNum + 1 . " + " . $numTotal . " = " . ($numTotal + $primerNum+1) . "<br>";
            }
             
        ?>
    </p>
</body>
</html>