<?php

include("libs/Smarty.class.php");

class FigureView{

  private $smarty;

  function __construct(){
      $this->smarty = new Smarty();
  }

  public function mostrar($figuras){
    $this->smarty->assign("figuras",$figuras);
    $this->smarty->display("figures.tpl");
  }

}


 ?>
