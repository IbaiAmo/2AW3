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

    public static function insertEscudo($defensa, $tipo){
        $conexion = Conectar::conexion();
        $sentencia = $conexion->prepare("INSERT INTO escudo (defensa, tipo) VALUES (?, ?)");
        $sentencia->bind_param("is", $defensa, $tipo);
        $sentencia->execute();
        $sentencia->close();
    }

    public static function updateEscudo($id, $defensa, $tipo){
        $conexion = Conectar::conexion();
        $sentencia = $conexion->prepare("UPDATE escudo SET defensa = ?, tipo = ? WHERE id = ?");
        $sentencia->bind_param("isi", $defensa, $tipo, $id);
        $sentencia->execute();
        $sentencia->close();
    }
}