<?php

require("model/entidades/Circulo.php");
require("model/entidades/Rectangulo.php");

/**
 *
 */
class FigureModel
{
  private $figures;

  function __construct()
  {
    $rectangulo = new Rectangulo(50,2);
    $circulo = new Circulo(3);


    $this->figures = array($rectangulo,$circulo);

  }

  public function getFigures(){
    return $this->figures;
  }
}


 ?>
