<?php
include_once("../model/MArma.php");
$id = $_GET["id"];
MArma::eliminar($id);
header("Location: listarArmas.php");