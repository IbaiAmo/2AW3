<?php
include_once("../../view/VCaballeros.php");
include_once("../../model/MArma.php");
include_once("../../model/MEscudo.php");

$armas = MArma::getArmas();
$escudos = MEscudo::getEscudos();

$vista = new VCaballeros();
$vista->inithtml();
$vista->formCaballero($armas, $escudos);
$vista->endhtml();