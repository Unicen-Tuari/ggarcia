<?php
  require_once("libs/Smarty.class.php");

  class HomeView {
    private $smarty;

    function __construct() {
      this->Smarty = new Smarty();
    }

    public function showPage($home) {
      $this->smarty->assign("home",$home);
      $this->smarty->display("home.tpl");
    }

  }

?>
