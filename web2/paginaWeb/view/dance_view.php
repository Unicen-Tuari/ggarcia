<?php
  require_once("libs/Smarty.class.php");

  class DanceView {
    private $smarty;

    function __construct() {
      $this->smarty = new Smarty();
    }

    public function showWeb($nameWeb) {
      $this->smarty->display($nameWeb);
    }

  }

?>
