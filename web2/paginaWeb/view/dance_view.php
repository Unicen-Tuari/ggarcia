<?php
  require_once("libs/Smarty.class.php");

  class DanceView {
    private $smarty;

    function __construct() {
      $this->smarty = new Smarty();
    }

    public function showWeb($nameWeb,$msg) {
      if ($msg != '') {
        $this->smarty->assign('msg', $msg);
      }
      $this->smarty->display($nameWeb);
    }

    public function showError($nameWeb,$msg) {
      $this->smarty->assign('msg', $msg);
      $this->smarty->display($nameWeb);
    }

    public function showDance($nameWeb,$danzas) {
      $this->smarty->assign('danzas', $danzas);
      $this->smarty->display($nameWeb);
    }

    public function showInfoInsc($nameWeb,$alumnos) {
      $this->smarty->assign('alumnos', $alumnos);
      $this->smarty->display($nameWeb);
    }

    public function showWebSignUp($nameWeb, $dances, $students, $subscribers) {
      $this->smarty->assign('danzas', $dances);
      $this->smarty->assign('alumnos', $students);
      $this->smarty->assign('inscriptos', $subscribers);
      $this->smarty->display($nameWeb);
    }

    public function showWebRegistry($nameWeb, $dances, $teachers, $students) {
      $this->smarty->assign('alumnos',$students);
      $this->smarty->assign('danzas', $dances);
      $this->smarty->assign('profes', $teachers);
      $this->smarty->display($nameWeb);
    }

    public function showUpdatePerson($nameWeb,$tipo, $datos) {
      $this->smarty->assign('tipoPersona',$tipo);
      $this->smarty->assign('datos',$datos);
      $this->smarty->display($nameWeb);
    }

    public function contenidoDanza($nameWeb,$datos) {
      $this->smarty->assign('datos',$datos);
      $this->smarty->display($nameWeb);
    }

  }

?>
