<?php
/**
 * Tengo un billete de avión para Denver definir la variable dataSalida (fecha y hora). 
 * Necesito que el programa que calcule tiempo me falta para coger dicho avión, 
 * dependiendo de la hora actual.
 */

 $dataSalida = new DateTime("20-09-2024 21:30:00");
 $fechaActual = new DateTime();
 $diff = date_diff($dataSalida, $fechaActual);
 $año = $diff->format("%Y");
 $mes = $diff->format("%m");
 $dia = $diff->format("%d");
 $hora = $diff->format("%H");
 $mins = $diff->format("%i");
 $secs = $diff->format("%s");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 10</title>
</head>
<body>
    <h1>Ejercicio 10</h1>
    <p><?="Quedan $año años, $mes meses, $dia días, $hora horas, $mins minutos, $secs segundos"?></p>
</body>
</html>