<?php
include_once("../../model/MEscudo.php");

$id = $_POST['id'];
$defensa = $_POST['defensa'];
$tipo = $_POST['tipo'];

MEscudo::updateEscudo($id, $defensa, $tipo);

header('Location: listarEscudos.php');