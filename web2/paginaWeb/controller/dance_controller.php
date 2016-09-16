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

    function showHome() {
      $this->view->home();
    }

  }
?>
