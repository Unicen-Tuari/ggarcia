<?php
  require_once("routing/configApp.php");
  require_once("controller/dance_controller.php");

  $danceController = new DanceController();

  if (!array_key_exists(ConfigApp::$ACTION, $_REQUEST)) {
    $danceController->showBase();
  } else {
    switch ($_REQUEST[ConfigApp::$ACTION]) {
      // Home del sitio
      case (ConfigApp::$ACTION_HOME):
        $danceController->showHome();
        break;
      // Clases del sitio
      case (ConfigApp::$ACTION_DANCE):
        $danceController->showDance();
        break;
      // Contact form del sitio
      case (ConfigApp::$ACTION_CONTACT_US):
        $danceController->showContactUs();
        break;
      // Inscripciones del sitio
      case (ConfigApp::$ACTION_SIGN_UP):
        $danceController->showInscripcion();
        break;
      case (ConfigApp::$ACTION_SIGN_UP_SUBSCRIBE):
        $danceController->signUp();
        break;
      // Register form del sitio
      case (ConfigApp::$ACTION_REGISTER):
        $danceController->showRegister();
        break;
      case (ConfigApp::$ACTION_REGISTER_ASSIGN_DANCE_TEACHER):
        $danceController->assign_dance_teacher();
        break;
      default:
        // si no hizo match, muestro home
        $danceController->showError();
    };
  };

?>
