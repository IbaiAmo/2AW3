<?php
include("Enemigo.php");

class koopa extends Enemigo{
    private $esCaparazonVerde;
    
    public function __construct($poder, $esCaparazonVerde){
        parent::__construct($poder);
        $this->esCaparazonVerde = $esCaparazonVerde;
    }

    public function getEsCaparazonVerde() {return $this->esCaparazonVerde;}

	public function setEsCaparazonVerde( $esCaparazonVerde): void {$this->esCaparazonVerde = $esCaparazonVerde;}

	public function moverse(){
        if ($this->getEsCaparazonVerde()){
            echo $this->getNombre() . " se mueve pero puede caerse por el borde";
        }else{
            echo $this->getNombre() . " se mueve y no se puede caer por el borde";
        }
    }

	public function atacar(){
        echo $this->getNombre() . " ha sido pisado y su caparazón es un proyectíl";
    }
	
}