<?php
  require_once "routing/configApp.php";
  require_once "controller/home_controller.php";

  if (!array_key_exists(ConfigApp::$ACTION,$_REQUEST) || $_REQUEST[ConfigApp::$ACTION] == ConfigApp::$ACTION_HOME) {
    // Home del sitio
    $homeController = new HomeController();
    $homeController->home();
  } // else{...}
?>
