<?php
include_once("Db.php");
class MArma{
    public static function getArmas(){
        $conexion = Conectar::conexion();
        $sentencia = $conexion->query("SELECT * FROM arma");
        $armas = array();
        while($filas = $sentencia->fetch_assoc()){
            $armas[] = $filas;
        }
        return $armas;
    }

    public static function eliminar($id){
        $conexion = Conectar::conexion();
        $sentencia = $conexion->prepare("DELETE FROM arma WHERE id= ?");
        $sentencia->bind_param("i", $id);
        $sentencia->execute();
        $sentencia->close();
    }
	
}