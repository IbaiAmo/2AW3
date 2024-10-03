<?php
class Animal{
    private $patas;
    private $anios;
    private $nombre;

    public function __construct( $patas,  $anios,  $nombre){
        $this->patas = $patas;
        $this->anios = $anios;
        $this->nombre = $nombre;
    }

    public function getPatas() {return $this->patas;}

	public function getAnios() {return $this->anios;}

	public function getNombre() {return $this->nombre;}

	public function setPatas( $patas): void {$this->patas = $patas;}

	public function setAnios( $anios): void {$this->anios = $anios;}

	public function setNombre( $nombre): void {$this->nombre = $nombre;}
}

