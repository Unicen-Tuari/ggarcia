<?php

	$now = date_create(date("Y-m-d"));

	if (isset($_POST["Nombre"]) && isset($_POST["Apellido"]) && isset($_POST["fecha"])) {
		$birth = strtotime($_POST["fecha"]);

    print_r($_POST["Nombre"] . " " . $_POST["Apellido"] . "<br>");
		print_r("Fecha de nacimiento: " . date("Y-m-d",$birth) . "<br>");
		print_r("Nació un " . date("l",$birth) . "<br>");
		print_r(date_diff(date_create(date("Y-m-d",$birth)),$now)->format("%R%a d&iacute;as<br>"));
		print_r("<br>"); // semanas
		print_r("<br>"); // meses
		print_r(date("Y")-date("Y",$birth) . " años<br>"); // años
  } else {
  	print_r("Error - Debe cargar los datos correctamente.");
  }

?>
