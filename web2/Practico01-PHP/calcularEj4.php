<?php
  $suma = 0;
  $dato = 'num';
  if ($_POST) {
    foreach ($_POST as $clave=>$valor) { // se envían todos los elementos del DOM dentro del formulario
      $suma += $valor;
    }
    echo "La suma de los valores es " + $suma;
  } else {
    echo "Debe ingresar una cantidad de inputs";
  }
?>
