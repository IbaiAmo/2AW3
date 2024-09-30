<?php
$nombre = $_POST['nombre'];
$fuerza = $_POST['fuerza'];
$ataque = $_POST['ataque'];
$defensa = $_POST['defensa'];
$experiencia = $_POST['experiencia'];
$fechaNac = $_POST['fechaNac'];
$activo = isset($_POST['activo']) ? $_POST['activo'] : 0;

$mysqli = new mysqli("localhost", "root", "", "caballeroscas");
$sentencia = $mysqli->prepare("INSERT INTO caballeros (id, nombre, fuerza, ataque, defensa, experiencia, fecha_nacimiento, activo) VALUES (NULL,? , ?, ?, ?, ?, ?, ?)");
$sentencia->bind_param("siiiisi", $nombre, $fuerza, $ataque, $defensa, $experiencia, $fechaNac, $activo);
$sentencia->execute();
$sentencia->close();

header("Location: index.php");
?>