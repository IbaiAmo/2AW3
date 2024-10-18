<?php
include_once("Db.php");
class MCaballero{
    public static function getCaballeros(){
        $conexion = Conectar::conexion();
        $caballeros = array();
        $sentencia = $conexion->query("SELECT * FROM caballero");
        while($filas = $sentencia->fetch_assoc()){
            $caballeros[] = $filas;
        }

        return $caballeros;
    }

    public static function delete($id){
        $conexion = Conectar::conexion();
        $sentencia = $conexion->prepare("DELETE FROM caballero WHERE id= ?");
        $sentencia->bind_param("i", $id);
        $sentencia->execute();
        $sentencia->close();
    }

    public static function update($id, $nombre, $fuerza, $nivel, $idArma, $idEscudo){
        $conexion = Conectar::conexion();
        $sentencia = $conexion->prepare("UPDATE caballero SET nombre = ? ,fuerza = ? ,nivel = ? ,id_arma = ? ,id_escudo = ? WHERE id = ?");
        $sentencia->bind_param("siiiii", $nombre, $fuerza, $nivel, $idArma, $idEscudo, $id);
        $sentencia->execute();
        $sentencia->close();
    }

    public static function insert($nombre, $fuerza, $nivel, $idArma, $idEscudo){
        $conexion = Conectar::conexion();
        $sentencia = $conexion->prepare("INSERT INTO caballero(nombre, fuerza, nivel, id_arma, id_escudo) VALUES (?, ?, ?, ?, ?)");
        $sentencia->bind_param("siiii", $nombre, $fuerza, $nivel, $idArma, $idEscudo);
        $sentencia->execute();
        $sentencia->close();
    }
}