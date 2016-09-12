<?php

require("config/configApp.php");
require("controller/figureController.php");



if (!array_key_exists(ConfigApp::$ACTION,$_REQUEST )
  || $_REQUEST[ConfigApp::$ACTION] == ConfigApp::$ACTION_SHOW_FIGURES){
        // Home del sitio
        $figureController = new FigureController();
        $figureController->showFigures();
    }


?>
