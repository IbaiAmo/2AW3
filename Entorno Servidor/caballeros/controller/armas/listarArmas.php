<?php
require_once('../../view/VArmas.php');
include_once('../../model/MArma.php');
$vista = new VArmas();
$vista->inithtml();
$armas = MArma::getArmas();
$vista->tablaArmas($armas);
$vista->endhtml();