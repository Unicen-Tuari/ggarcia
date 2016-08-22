<?php
  define("BAJO", 18.5);
  define("NORMAL", 24.99);
  define("SOBREPESO", 25);
  define("OBESIDAD", 30);

  function calcularIMC($peso, $altura) {
    return ($peso/($altura*$altura));
  }

  function calcularEstado($peso, $altura) {
    $imc = calcularIMC($peso, $altura);
    $out = "Su estado es: ";
    if ($imc < BAJO) {
      echo $out . "BAJO";
    } elseif ($imc <= NORMAL) {
      echo $out . "NORMAL";
    } elseif (($imc >= SOBREPESO) && ($imc < OBESIDAD)) {
      echo $out . "SOBREPESO";
    } else {
      echo $out . "OBESIDAD";
    }
  }

  if (isset($_GET["peso"]) && isset($_GET["altura"])) {
    calcularEstado($_GET["peso"],$_GET["altura"]);
  } else {
    echo "Ocurri&oacute; un error";
  }
?>
