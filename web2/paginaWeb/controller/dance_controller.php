<?php
  require_once("model/dance_Model.php");
  require_once("view/dance_View.php");

  class DanceController {
    private $view;

    function __construct() {
      $this->view = new DanceView();
    }

    function showBase() {
      $this->view->showWeb("templates/base.tpl");
    }

    function showHome() {
      $this->view->showWeb("templates/home.tpl");
    }

    function showDance() {
      $this->view->showWeb("templates/clases.tpl");
    }

    function showContactUs() {
      $this->view->showWeb("templates/contact_us.tpl");
    }

    function showSignUp() {
      $this->view->showWeb("templates/inscripcion.tpl");
    }

    function showError() {
      $this->view->showWeb("templates/error.tpl");
    }

  }
?>
