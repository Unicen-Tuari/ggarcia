<?php
  require_once("routing/configApp.php");
  require_once("controller/home_controller.php");
  require_once("controller/dance_controller.php");
  require_once("controller/contact_controller.php");

  if (!array_key_exists(ConfigApp::$ACTION,$_REQUEST)) {
    switch ($_REQUEST[ConfigApp::$ACTION]) {
      // Home del sitio
      case (ConfigApp::$ACTION_HOME):
        $homeController = new HomeController();
        $homeController->home();
        break;
      // Clases del sitio
      case (ConfigApp::$ACTION_DANCE):
        $danceController = new DanceController();
        $danceController->clases();
        break;
      // Contact form del sitio
      case (ConfigApp::$ACTION_CONTACT_US):
        $contactController = new ContactController();
        $contactController->contactUs();
        break;
      default:
        echo "No se igualó clave de request";
    };
  } else {
    echo "No se encontró clave";
  };

?>
