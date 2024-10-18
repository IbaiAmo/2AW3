<?php
include_once("../../view/VCaballeros.php");
include_once("../../model/MCaballero.php");
include_once("../../model/MArma.php");
include_once("../../model/MEscudo.php");

$id = $_GET['id'];
$nombre; $fuerza; $nivel; $idArma; $idEscudo;

$caballeros = MCaballero::getCaballeros();
$armas = MArma::getArmas();
$escudos = MEscudo::getEscudos();

for ($i = 0; $i < count($caballeros); $i++){
    if ($caballeros[$i]['id'] == $id) {
        $nombre = $caballeros[$i]['nombre']; 
        $fuerza = $caballeros[$i]['fuerza']; 
        $nivel = $caballeros[$i]['nivel']; 
        $idArma = $caballeros[$i]['id_arma']; 
        $idEscudo = $caballeros[$i]['id_escudo'];
    }
}


$vista = new VCaballeros();
$vista->inithtml();
$vista->editarCaballero($id, $nombre, $fuerza, $nivel, $idArma, $idEscudo, $armas, $escudos);
$vista->endhtml();