<?php
include_once("../../model/MArma.php");
$danio = $_POST['danio'];
$tipo = $_POST['tipo'];

MArma::create($danio, $tipo);

header('Location: listarArmas.php');