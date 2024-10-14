<?php
include_once("../../view/VEscudos.php");
include_once("../../model/MEscudo.php");

$id = $_GET['id'];
$defensa;
$tipo;
$escudos = MEscudo::getEscudos();

for ($i = 0; $i < count($escudos); $i++) {
    if ($escudos[$i]['id'] == $id) {
        $tipo = $escudos[$i]['tipo'];
        $defensa = $escudos[$i]['defensa'];
    }
}

$vista = new VEscudos();

$vista->inithtml();
$vista->escudoUpdateForm($id, $defensa, $tipo);
$vista->endhtml();