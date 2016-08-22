<?php
  require_once("../libs/Smarty.class.php");
  $sm = new Smarty;
  $sm->assign("titulo","Ejercicio 3");
  $sm->display("ejercicio3.tpl");
?>
