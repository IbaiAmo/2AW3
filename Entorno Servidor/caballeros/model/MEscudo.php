<?php
include_once("Db.php");

class MEscudo{
    public static function getEscudos(){
        $conexion = Conectar::conexion();
        $sentencia = $conexion->query("SELECT * FROM escudo");
        $escudos = array();
        while($fila = $sentencia->fetch_assoc()){
            $escudos[] = $fila;
        }
        
        return $escudos;
    }

    public static function deleteEscudo($id){
        $conexion = Conectar::conexion();
        $sentencia = $conexion->prepare("DELETE FROM escudo WHERE id = ?");
        $sentencia->bind_param("i", $id);
        $sentencia->execute();
        $sentencia->close();
    }
}