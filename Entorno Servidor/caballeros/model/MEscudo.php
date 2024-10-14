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
}