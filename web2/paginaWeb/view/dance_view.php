<?php
  require_once("libs/Smarty.class.php");
  
  class DanceView {
    private $smarty;

    function __construct() {
      this->Smarty = new Smarty();
    }

    public function showPage($dance) {
      $this->smarty->assign("dance",$dance);
      $this->smarty->display("dance.tpl");
    }

  }

?>
