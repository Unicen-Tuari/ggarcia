<?php

require_once("model/entidades/Figura.php");

/**
 *
 */
class Rectangulo extends Figura
{

  private $ancho;
  private $alto;

  function __construct($ancho,$alto)
  {
    $this->tipo = "Rectangulo";
    $this->ancho = $ancho;
    $this->alto = $alto;
  }

  public function getArea(){
    return $this->ancho*$this->alto;
  }

}

 ?>
