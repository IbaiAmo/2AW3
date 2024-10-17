<?php
include_once("../../model/MCaballero.php");

$id = $_GET['id'];

MCaballero::delete($id);

header('Location: listarCaballeros.php');