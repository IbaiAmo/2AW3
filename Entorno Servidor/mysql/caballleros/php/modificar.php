<?php
$id = $_GET['id'];
$mysqli = new mysqli("localhost","root", "", "caballeroscas");

$resultado = $mysqli->query("SELECT * FROM caballeros WHERE id=" . $id);
$row = $resultado->fetch_assoc();
$nombre = $row['nombre'];
$fuerza = $row['fuerza'];
$ataque = $row['ataque'];
$defensa = $row['defensa'];
$experiencia = $row['experiencia'];
$fechaNac = $row['fechaNac'];
$activo = $row['activo'];
$mysqli->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="https://cdn-icons-png.freepik.com/256/5305/5305216.png?semt=ais_hybrid">
    <link rel="stylesheet" href="../css/modificar.css">
    <title><?=$row['nombre']?> - modificar</title>
</head>
<body>
</body>
</html>