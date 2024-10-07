<?php
//Llamada al modelo
require_once("Model/personas_modelo.php");
$per = new personas_modelo();
$datos = $per->get_personas();
//Llamada a la vista
include_once("View/personas_vista1.php");
?>