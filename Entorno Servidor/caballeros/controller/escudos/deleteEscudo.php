<?php
include("../../model/MEscudo.php");

$id = $_GET['id'];

MEscudo::deleteEscudo($id);

header("Location: ./listarEscudos.php");