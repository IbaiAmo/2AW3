<?php
include_once("../../view/VEscudos.php");

$vista = new VEscudos();

$vista->inithtml();
$vista->escudoForm();
$vista->endhtml();