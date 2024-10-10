<?php
include_once("Personaje.php");
abstract class Enemigo extends Personaje{
    private $poder;

    public function __construct($name, $puntosDeVida, $fuerza, $poder){
        parent::__construct($name, $puntosDeVida, $fuerza);
        $this->poder = $poder;
    }

    public function getPoder() {return $this->poder;}

	public function setPoder( $poder): void {$this->poder = $poder;}

    abstract function moverse();
    abstract function atacar();
	
}