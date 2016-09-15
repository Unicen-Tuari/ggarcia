<?php
  require_once("routing/configApp.php");
  require_once("controller/dance_controller.php");

  if(!array_key_exists(ConfigApp::$ACTION, $_REQUEST) || $_REQUEST[ConfigApp::$ACTION] == ConfigApp::$ACTION_DEFAULT) {
    $danceController = new DanceController();
    $danceController->showHome();
  } else {
    switch ($_REQUEST[ConfigApp::$ACTION]) {
      // Clases del sitio
      case (ConfigApp::$ACTION_DANCE):
        $danceController = new DanceController();
        $danceController->showClases();
        break;
      // Contact form del sitio
      case (ConfigApp::$ACTION_CONTACT_US):
        $danceController = new DanceController();
        $danceController->showContactUs();
        break;
      default:
        echo "No se igualó clave de request - Página no encontrada";
    };
  };

?>
