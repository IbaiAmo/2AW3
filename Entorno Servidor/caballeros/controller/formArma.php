<?php
include_once("../view/VArmas.php");
$vista = new VArmas();
$vista->inithtml();
$vista->armaForm();
$vista->endhtml();