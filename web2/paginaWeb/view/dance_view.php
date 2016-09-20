<?php
  require_once("libs/Smarty.class.php");

  class DanceView {
    private $smarty;

    function __construct() {
      $this->smarty = new Smarty();
    }

    public function home() {
      //$this->smarty->assign("dance",$dance);
      $this->smarty->display("templates/home.tpl");
    }

    public function dance() {
      //$this->smarty->assign("dance",$dance);
      $this->smarty->display("dance.tpl");
    }

    public function contact() {
      //$this->smarty->assign("dance",$dance);
      $this->smarty->display("contact.tpl");
    }

  }

?>
