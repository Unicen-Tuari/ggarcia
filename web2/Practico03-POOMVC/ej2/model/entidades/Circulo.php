<?php

require_once("model/entidades/Figura.php");

/**
 *
 */
class Circulo extends Figura
{

  private $radio;

  function __construct($radio)
  {
    $this->tipo = "Circulo";
    $this->radio = $radio;
  }

  public function getArea(){
    return pi()*$this->radio*$this->radio;
  }

}


 ?>
