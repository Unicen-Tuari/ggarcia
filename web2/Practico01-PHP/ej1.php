<?php
  require_once('../libs/Smarty.class.php');
  
  $smarty = new Smarty;
  $smarty->assign("titulo","Ejercicio 1");
  $smarty->display("ejercicio1.tpl");
?>
