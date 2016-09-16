<?php
  require_once("libs/Smarty.class.php");

  class DanceView {
    private $smarty;

    function __construct() {
      $this->smarty = new Smarty();
    }

    public function showPage($dance) {
      $this->smarty->assign("dance",$dance);
      $this->smarty->display("dance.tpl");
    }

    public function home() {
      //$this->smarty->assign("dance",$dance);
      $this->smarty->display("view/templates/home.tpl");
    }

  }

?>
