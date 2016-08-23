<?php
  $suma = 0;
  $dato = 'num';
  if ((isset($_POST["cantidad"])) && (is_numeric($_POST["cantidad"]))) {
    for ($i=0; $i < $_POST["cantidad"]; $i++) {
      $suma += $_POST[($dato + $i)];
    }
  } else {
    echo "Debe ingresar una cantidad de inputs";
  }
?>
