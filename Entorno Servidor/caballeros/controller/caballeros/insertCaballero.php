<?php

include_once("../../model/MCaballero.php");

$nombre = $_POST['nombre'];
$fuerza = $_POST['fuerza'];
$nivel = $_POST['nivel'];
$idArma = $_POST['arma'] == "Sin asignar" ? null : $_POST['arma'];
$idEscudo = $_POST['escudo'] == "Sin asignar" ? null : $_POST['escudo'];

MCaballero::insert($nombre, $fuerza, $nivel, $idArma, $idEscudo);

header('Location: listarCaballeros.php');