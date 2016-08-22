<?php
  if (isset($_GET["num1"]) && isset($_GET["num2"]) && isset($_GET["num3"]))
    echo "El resultado es: " + $_GET["num1"] * $_GET["num2"] - $_GET["num3"];
  else {
    echo "Hubo un error";
  }
?>
