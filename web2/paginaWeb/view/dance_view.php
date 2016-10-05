<?php
  require_once("libs/Smarty.class.php");

  class DanceView {
    private $smarty;

    function __construct() {
      $this->smarty = new Smarty();
    }

    public function showWeb($nameWeb) {
      //$this->smarty->assign("dance",$dance);
      $this->smarty->display($nameWeb);
    }

  }

?>
