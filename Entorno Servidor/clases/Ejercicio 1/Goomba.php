<?php
include_once("Personaje.php");
class Goomba extends Personaje{
    private $velocidad;

    public function __construct($nombre, $puntosDeVida, $fuerza, $velocidad){
        parent::__construct($nombre, $puntosDeVida, $fuerza);
        $this->velocidad = $velocidad;
    }

    public function getVelocidad() {return $this->velocidad;}

	public function setVelocidad($velocidad): void {$this->velocidad = $velocidad;}

    public function moverse(){
        echo $this->getNombre() . " se ha movido en línea recta";
    }
    
    public function atacar(){
        echo $this->getNombre() . " ha atacado pero no hace mucho daño";
    }	
}