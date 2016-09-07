<?php
	require('../libs/Smarty.class.php');

  $smarty = new Smarty;
	$smarty->display('../templates/ej3.tpl');

	function IdentificarDominio() {
		$dominio = explode("@",$_POST["Email"]);
		if (($dominio[1] == "gmail.com") || ($dominio[1] == "hotmail.com")) {
			return true;
		}
		return false;
	}

?>
