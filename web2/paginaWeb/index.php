<?php
  require_once("routing/configApp.php");
  require_once("controller/dance_controller.php");

  $danceController = new DanceController();

  if(!array_key_exists(ConfigApp::$ACTION, $_REQUEST) || $_REQUEST[ConfigApp::$ACTION] == ConfigApp::$ACTION_DEFAULT) {
    $danceController->showBase();
  } else {
    switch ($_REQUEST[ConfigApp::$ACTION]) {
      // Clases del sitio
      case (ConfigApp::$ACTION_DANCE):
        $danceController->showDance();
        break;
      // Contact form del sitio
      case (ConfigApp::$ACTION_CONTACT_US):
        $danceController->showContactUs();
        break;
      default:
        // si no hizo match, muestro home
        $danceController->showError();
    };
  };

?>
