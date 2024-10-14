<?php
include_once("../model/MArma.php");

$id = $_POST['id'];
$danio = $_POST['danio'];
$tipo = $_POST['tipo'];

MArma::edit($id, $danio, $tipo);

header('Location: ./listarArmas.php');

