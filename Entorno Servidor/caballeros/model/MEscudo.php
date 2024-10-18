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

    public static function tipoEscudo($id){
        $conexion = Conectar::conexion();
        $tipo = $conexion->query("SELECT tipo FROM escudo INNER JOIN caballero on caballero.id_escudo = escudo.id WHERE caballero.id = $id");
        $tipo = $tipo->fetch_assoc();

        if(isset($tipo["tipo"])){
            return $tipo["tipo"];
        }else{
            return "Sin asignar";
        }
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