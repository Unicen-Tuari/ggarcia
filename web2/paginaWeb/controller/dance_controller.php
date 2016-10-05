<?php
  require_once("model/dance_Model.php");
  require_once("view/dance_View.php");

  class DanceController {
    private $model;
    private $view;

    function __construct() {
      $this->model = new DanceModel();
      $this->view = new DanceView();
    }

    function showBase() {
      $this->view->showWeb("templates/base.tpl");
    }

    function showHome() {
      $this->view->showWeb("templates/home.tpl");
    }

    // le puedo parametrizar una variable para que sólo me muestre una danza, y si es null q muestre todas
    function showDance() {
      $this->view->showWeb("templates/clases.tpl");
    }

    function showContactUs() {
      $this->view->showWeb("templates/clases.tpl");
    }

    function showContactUs() {
      $this->view->showWeb("templates/error.tpl");
    }

  }
?>
