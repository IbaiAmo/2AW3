<?php
include_once("Personaje.php");
include_once("interfaz.php");
class Luigi extends Personaje implements Salta{
    private $agilidad;

    public function __construct($nombre, $puntosDeVida, $fuerza, $agilidad){
        parent::__construct($nombre, $puntosDeVida, $fuerza);
        $this->agilidad = $agilidad;
    }

    public function getAgilidad() {return $this->agilidad;}

	public function setAgilidad($agilidad): void {$this->agilidad = $agilidad;}

    public function moverse(){
        echo $this->getNombre() . " se ha movido";
    }
    
    public function atacar(){
        echo $this->getNombre() . " ha atacado";
    }

	public function salta(){
        echo $this->getNombre() . " ha saltado";
    }
	
}