<?php
	require("../libs/Smarty.class.php");

	//$smarty = new Smarty;

  if (isset($_POST["Nombre"]) && isset($_POST["Apellido"]) && isset($_POST["fecha"])) {
    print_r($_POST["Nombre"] + " " + $_POST["Apellido"]);
		print_r("Fecha de nacimiento: " + $_POST["fecha"]);
		print_r("Nació un " + date("l",$_POST["fecha"]));
		print_r(date_diff(getdate(),$_POST["fecha"]));
		/*print_r(); // semanas
		print_r(); // meses
		print_r(); // años
		*/
  } else {
  	print_r("Error - Debe cargar los datos correctamente.");
  }

  /*
	$smarty->assign("titulo","Ejercicio 2");
  $smarty->assign('info',$info);
	$smarty->display('../templates/persona.tpl');
	*/
?>

<p>Tiene días 6.572 Días</p>
<p>938,86 Semanas</p>
<p>215,92 Meses</p>
<p>18 Años</p>
