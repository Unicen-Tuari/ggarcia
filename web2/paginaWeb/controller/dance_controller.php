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

    function showSignIn() {
      $dances = $this->model->getDances();
      $this->view->showSignIn('templates/inscripcion.tpl',);
    }

    function showError() {
      $this->view->showWeb("templates/error.tpl");
    }

  }
?>
