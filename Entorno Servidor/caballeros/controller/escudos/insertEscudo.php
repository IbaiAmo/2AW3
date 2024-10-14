<?php
include_once("../../model/MEscudo.php");

$defensa = $_POST['defensa'];
$tipo = $_POST['tipo'];

MEscudo::insertEscudo($defensa, $tipo);

header("Location: ./listarEscudos.php");