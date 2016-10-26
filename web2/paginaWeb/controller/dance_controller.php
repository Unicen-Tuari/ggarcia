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
      $this->view->showWeb("templates/base.tpl","");
    }

    public function showHome() {
      $this->view->showWeb("templates/home.tpl","");
    }

    public function showDance() {
      $dancesList = $this->model->getDances();
      $this->view->showDance("templates/clases.tpl",$dancesList);
    }

    public function addDance() {
         $image_name = $_FILES['image']['name'][0];
         $image_tmp = $_FILES['image']['tmp_name'][0];
         $image['name']=$image_name;
         $image['tmp_name']=$image_tmp;
      $this->model->addDance($_POST['nameDanceForm'],$_POST['infoDanceForm'],$image);
    }

    public function deleteDance() {
      $teacher = $this->model->getTeacherByDance($_REQUEST['dataId']);
      if (IS_NULL($teacher)) {
        return false;
      } else {
        $this->model->deleteDance($_REQUEST['dataId']);
        return true;
      }
    }

    public function updatePerson() {
      $this->model->updatePerson($_REQUEST['person'],$_REQUEST['idP'],$_REQUEST['nameP'],$_REQUEST['emailP'],$_REQUEST['telP']);
    }

    public function infoDance() {
      $info = $this->model->getDanceById($_REQUEST['dataId']);
      $this->view->contenidoDanza("templates/infoDanza.tpl", $info);
    }

    public function showContactUs() {
      $this->view->showWeb("templates/contact_us.tpl","");
    }

    public function showRegister() {
      $dancesList = $this->model->getDances();
      $teachersList = $this->model->getTeachers();
      $studentsList = $this->model->getStudents();
      $this->view->showWebRegistry("templates/register.tpl", $dancesList, $teachersList, $studentsList);
    }

    public function assign_dance_teacher() {
      $this->model->assign_dance_teacher($_REQUEST['idDanza'],$_REQUEST['idProfe']);
    }

    public function deallocate_dance_teacher() {
      $this->model->deallocate_dance_teacher($_REQUEST['dataId']);
    }

    public function addPerson() {
      $this->model->addPerson($_REQUEST['person'],$_REQUEST['nameP'],$_REQUEST['email'],$_REQUEST['tel']);
    }

    public function deletePerson() {
      if ($_REQUEST['tipo'] == 'A') {
        $this->model->deleteAlumno($_REQUEST['dataId']);
      } elseif ($_REQUEST['tipo'] == 'P') {
        $this->model->deleteProfesor($_REQUEST['dataId']);
      }
    }

    public function showUpdatePerson() {
      if ($_REQUEST['tipo'] == 'A') {
        $datos = $this->model->getStudentById($_REQUEST['dataId']);
      } elseif ($_REQUEST['tipo'] == 'P') {
        $datos = $this->model->getTeacherById($_REQUEST['dataId']);
      }
      $this->view->showUpdatePerson("templates/updatePersona.tpl", $_REQUEST['tipo'],$datos);
    }

    public function showInscripcion() {
      $dancesList = $this->model->getDances();
      $studentsList = $this->model->getStudents();
      $signUpList = $this->model->getStudentsByDance(NULL);
      $this->view->showWebSignUp("templates/inscripcion.tpl", $dancesList, $studentsList, $signUpList);
    }

    public function getInscAlumnos() {
      $studentsList = $this->model->getInfoStudentsByDance($_REQUEST['dataId']);
      $this->view->showInfoInsc("templates/infoInsc.tpl",$studentsList);
    }

    public function signUp() {
      $this->model->signUp($_REQUEST['idDance'],$_REQUEST['idAlumno']);
    }

    public function unsubscribe() {
      $this->model->unsubscribe($_REQUEST['dataId']);
    }

    public function showError() {
      $this->view->showWeb("templates/error.tpl",$_REQUEST['msg']);
    }

  }
?>
