<?php
include_once("../../model/MArma.php");
include_once("../../view/VArmas.php");

$id = $_GET['id'];
$danio;
$tipo;

$armas = MArma::getArmas();

for ($i = 0; $i < count($armas); $i++){
    if ($armas[$i]['id'] == $id){
        $tipo = $armas[$i]['tipo'];
        $danio = $armas[$i]['danio'];
    }
}

$vista = new VArmas();
$vista->inithtml();
$vista->formEditArma($id, $danio, $tipo);
$vista->endhtml();