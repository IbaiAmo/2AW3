<?php
$id = $_POST['id'];
$nombre = $_POST['nombre'];
$fuerza = $_POST['fuerza'];
$ataque = $_POST['ataque'];
$defensa = $_POST['defensa'];
$experiencia = $_POST['experiencia'];
$fecha = $_POST['fechaNac'];
// $activo = $_POST['activo'];
$boton = $_POST['boton'];

var_dump($_POST);


$mysqli = new mysqli("localhost", "root", "", "caballeroscas");
$sentencia = $mysqli->prepare("UPDATE caballeros SET nombre=?, fuerza=?, ataque=?, defensa=?, experiencia=?, fecha_nacimiento=? WHERE id=?");
$sentencia->bind_param("siiiisi", $nombre, $fuerza, $ataque, $defensa, $experiencia, $fecha, $id);
$sentencia->execute();
$sentencia->close();

if($boton == "Guardar"){
    header("Location: modificar.php?id=" . $id);
}else{
    header("Location: index.php");
}
    

?>