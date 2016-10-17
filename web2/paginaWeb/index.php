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
        $danceController->showSignUp();
        break;
      // Register form del sitio
      case (ConfigApp::$ACTION_REGISTER):
        $danceController->showRegister();
        break;
      default:
        // si no hizo match, muestro home
        $danceController->showError();
    };
  };

?>
