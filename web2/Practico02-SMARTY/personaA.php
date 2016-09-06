<?php
	require("../libs/Smarty.class.php");

	$smarty = new Smarty;

  $name = "";
  $last = "";
  $birth = getdate();

  if (isset($name) && isset($last) && isset($birth)) {
    print_r($name . " " . $last);
		print_r("Fecha de nacimiento: " . $birth);
		print_r("Nació un " . date("l",$birth));
		print_r(date_diff(getdate(),$birth));
		/*print_r(); // semanas
		print_r(); // meses
		print_r(); // años
		*/
  } else {
  	print_r("Error - Debe cargar los datos correctamente.");
  }

	$smarty->assign("titulo","Ejercicio 2");
  $smarty->assign('Nombre',$name);
  $smarty->assign('Apellido',$last);
  $smarty->assign('fecha',$birth);
	$smarty->display('../templates/personaA.tpl');
?>
