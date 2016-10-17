<?php
  require_once("model/dance_Model.php");
  require_once("view/dance_View.php");

  class DanceController {
    private $view;
    private $model;

    function __construct() {
      $this->view = new DanceView();
      $this->model = new DanceModel();
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

    function showRegister() {
      $this->view->showWeb("templates/register.tpl");
    }

    function showAssign() {
      $this->view->showWeb("templates/inscripcion.tpl");
    }

    function showError() {
      $this->view->showWeb("templates/error.tpl");
    }

  }
?>
