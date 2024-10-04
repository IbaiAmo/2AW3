<?php
include_once("Personaje.php");
include_once("interfaz.php");

class Mario extends Personaje implements Salta{
    private $habilidadEspecial;

    public function __construct($nombre, $puntosDeVida, $fuerza, $habilidadEspecial){
        parent::__construct($nombre, $puntosDeVida, $fuerza);
        $this->habilidadEspecial = $habilidadEspecial;
    }

    public function getHabilidadEspecial() {return $this->habilidadEspecial;}

	public function setHabilidadEspecial( $habilidadEspecial): void {$this->habilidadEspecial = $habilidadEspecial;}

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