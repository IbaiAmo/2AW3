<?php
$num1 = 5;
$num2 = 8;
$sum = $num1 + $num2;
$res = $num1 - $num2;
$mul = $num1 * $num2;
$div = $num1 / $num2;
$mod = $num1 % $num2;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
</head>
<body>
    <h1>Ejercicio 1</h1>
    <?= "$num1 + $num2 = $sum <br>"?>
    <?= "$num1 - $num2 = $res <br>"?>
    <?= "$num1 x $num2 = $mul <br>"?>
    <?= "$num1 / $num2 = $div <br>"?>
    <?= "$num1 % $num2 = $mod <br>"?>
</body>
</html>