<?php
$num1 = 9;
$num2 = 8;
$num3 = 1;
$mayor;$medio;$menor;

if($num1 > $num2 && $num2 > $num3){
    $mayor = $num1;
    $medio = $num2;
    $menor = $num3;
}elseif($num1 > $num3 && $num3 > $num2){
    $mayor = $num1;
    $medio = $num3;
    $menor = $num2;
}elseif($num2 > $num1 && $num1 > $num3){
    $mayor = $num2;
    $medio = $num1;
    $menor = $num3;
}elseif($num2 > $num3 && $num3 > $num1){
    $mayor = $num2;
    $medio = $num3;
    $menor = $num1;
}elseif($num3 > $num2 && $num2 > $num1){
    $mayor = $num3;
    $medio = $num2;
    $menor = $num1;
}else{
    $mayor = $num3;
    $medio = $num1;
    $menor = $num2;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercico 4</title>
</head>
<body>
    <h1>Ejercicio 4</h1>
    <h2>En orden ascendente:</h2>
    <ul>
        <li><?=$menor?></li>
        <li><?=$medio?></li>
        <li><?=$mayor?></li>
    </ul>
    <h2>En orden descendente:</h2>
    <ul>
        <li><?=$mayor?></li>
        <li><?=$medio?></li>
        <li><?=$menor?></li>
    </ul>
</body>
</html>