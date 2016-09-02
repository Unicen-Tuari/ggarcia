<?php
	require("../libs/Smarty.class.php");
  $info = [];

	$smarty = new Smarty;

  if (isset($_POST["inversion"]) && isset($_POST["interes"])) {
    $info = [
      "name" => $_POST["Nombre"],
      "lastName" => $_POST["Apellido"],
      "birthDate" => $_POST["fecha"]
    ];
  }

  $smarty->assign("titulo","Ejercicio 2");
  $smarty->assign('info',$info);
	$smarty->display('../templates/persona.tpl');
?>
