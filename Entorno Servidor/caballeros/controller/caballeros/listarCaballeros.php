<?php
include_once("../../model/MCaballero.php");
include_once("../../view/VCaballeros.php");

$caballeros = MCaballero::getCaballeros();

$vista = new VCaballeros();
$vista->inithtml();
$vista->verCaballeros($caballeros);
$vista->endhtml();