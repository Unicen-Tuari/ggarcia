<?php
  require_once('../libs/Smarty.class.php');
  $smarty = new Smarty;
  $smarty->assign("titulo","Ejercicio 2");
  $smarty->display("ejercicio2.tpl");
?>
