<?php
  require_once("libs/Smarty.class.php");

  class ClassView {
    private $smarty;

    function __construct(){
      this->Smarty = new Smarty();
    }

    public function showPage($clase) {
      $this->smarty->assign("clase",$clase);
      $this->smarty->display("index.tpl");
    }

  }

?>
