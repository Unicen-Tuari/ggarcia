<?php
  require_once("libs/Smarty.class.php");

  class DanceView {
    private $smarty;

    function __construct() {
      $this->smarty = new Smarty();
    }

    public function showWeb($nameWeb,$msg) {
      $this->smarty->assign('msg', $msg);
      $this->smarty->display($nameWeb);
    }

    public function showWebSignUp($nameWeb, $dances, $students, $subscribers) {
      $this->smarty->assign('danzas', $dances);
      $this->smarty->assign('alumnos', $students);
      $this->smarty->assign('inscriptos', $subscribers);
      $this->smarty->display($nameWeb);
    }

    public function showWebRegistry($nameWeb, $dances, $teachers) {
      $this->smarty->assign('danzas', $dances);
      $this->smarty->assign('profes', $teachers);
      $this->smarty->display($nameWeb);
    }

  }

?>
