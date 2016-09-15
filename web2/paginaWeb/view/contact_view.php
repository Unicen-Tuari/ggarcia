<?php
  require_once("libs/Smarty.class.php");

  class ContactView {
    private $smarty;

    function __construct() {
      this->Smarty = new Smarty();
    }

    public function showPage($contact) {
      $this->smarty->assign("contact",$contact);
      $this->smarty->display("contact.tpl");
    }

  }

?>
