<?php
  require_once("model/dance_Model.php");
  require_once("view/dance_View.php");

  class DanceController {
    private $view;
    private $model;

    public function __construct() {
      $this->view = new DanceView();
      $this->model = new DanceModel();
    }

    public function showBase() {
      $this->view->showWeb("templates/base.tpl");
    }

    public function showHome() {
      $this->view->showWeb("templates/home.tpl");
    }

    public function showDance() {
      $this->view->showWeb("templates/clases.tpl");
    }
    public function addDance() {
      $this->model->addDance($_REQUEST['nameD']);
    }

    public function showContactUs() {
      $this->view->showWeb("templates/contact_us.tpl");
    }

    public function showRegister() {
      $dancesList = $this->model->getDances();
      $teachersList = $this->model->getTeachers();
      $this->view->showWebRegistry("templates/register.tpl", $dancesList, $teachersList);
    }

    public function assign_dance_teacher() {
      $this->model->assign_dance_teacher($_REQUEST['idDanza'],$_REQUEST['idProfe']);
    }

    public function addPerson() {
      $this->model->addPerson($_REQUEST['person'],$_REQUEST['nameP'],$_REQUEST['email'],$_REQUEST['tel']);
    }

    public function showInscripcion() {
      $dancesList = $this->model->getDances();
      $studentsList = $this->model->getStudents();
      $signUpList = $this->model->getStudentsByDance();
      $this->view->showWebSignUp("templates/inscripcion.tpl", $dancesList, $studentsList, $signUpList);
    }

    public function unsubscribe() {
      $this->model->unsubscribe($_REQUEST['dataId']);
    }

    public function showError() {
      $this->view->showWeb("templates/error.tpl");
    }

  }
?>
