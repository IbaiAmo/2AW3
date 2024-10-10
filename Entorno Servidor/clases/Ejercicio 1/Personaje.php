<?php
abstract class Personaje{
    protected $nombre;
    protected $puntosDeVida;
    protected $fuerza;

    public function __construct($nombre,$puntosDeVida, $fuerza){
        $this->nombre = $nombre;
        $this->puntosDeVida = $puntosDeVida;
        $this->fuerza = $fuerza;
    }

    public function getNombre() {return $this->nombre;}

	public function getPuntosDeVida() {return $this->puntosDeVida;}

	public function getFuerza() {return $this->fuerza;}

	public function setNombre( $nombre): void {$this->nombre = $nombre;}

	public function setPuntosDeVida( $puntosDeVida): void {$this->puntosDeVida = $puntosDeVida;}

	public function setFuerza( $fuerza): void {$this->fuerza = $fuerza;}

	abstract public function moverse();

	abstract public function atacar();

    public function recibirDano($dano){
        $this->puntosDeVida -= $dano;
    }	
}