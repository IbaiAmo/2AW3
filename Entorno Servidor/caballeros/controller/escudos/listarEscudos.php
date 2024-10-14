<?php
include_once("../../view/VEscudos.php");
include_once("../../model/MEscudo.php");

$vista = new VEscudos();
$vista->inithtml();
$vista->verEscudos(MEscudo::getEscudos());
$vista->endhtml();