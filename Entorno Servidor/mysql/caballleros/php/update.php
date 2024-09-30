<?php
$id = $_POST['id'];
$nombre = $_POST['nombre'];
$fuerza = $_POST['fuerza'];
$ataque = $_POST['ataque'];
$defensa = $_POST['defensa'];
$experiencia = $_POST['experiencia'];
$fecha = $_POST['fechaNac'];
$activo = isset($_POST['activo']) ? 1 : 0;
$boton = $_POST['boton'];

var_dump($_POST);
echo $activo;

$mysqli = new mysqli("localhost", "root", "", "caballeroscas");
$sentencia = $mysqli->prepare("UPDATE caballeros SET nombre=?, fuerza=?, ataque=?, defensa=?, experiencia=?, fecha_nacimiento=?, activo=? WHERE id=?");
$sentencia->bind_param("siiiisii", $nombre, $fuerza, $ataque, $defensa, $experiencia, $fecha, $activo, $id);
$sentencia->execute();
$sentencia->close();

if($boton == "Guardar"){
    header("Location: modificar.php?id=" . $id);
}else{
    header("Location: index.php");
}
    

?>