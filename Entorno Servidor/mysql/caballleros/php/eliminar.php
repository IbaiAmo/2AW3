<?php
$id= $_GET['id'];
$mysqli = new mysqli("localhost", "root","", "caballeroscas");

$sentencia = $mysqli->prepare("DELETE FROM caballeros WHERE id=?");
$sentencia->bind_param("i", $id);
$sentencia->execute();
$sentencia->close();
header("Location: index.php");
?>