<?php
  $html = "<table>";
  $meses = 12;
  if (isset($_POST["inversion"]) && isset($_POST["interes"])) {
    $html .= "<td>";
    for ($i=1; $i<=$meses; $i++) {
      "<tr>" . $i . "</tr>";
    }
    $html .= "</td><td>";
    for ($i=1; $i<=$meses; $i++) {
      "<tr>" . ($_POST["inversion"]*$_POST["interes"]/100) . "</tr>";
    }
    $html .= "</td></table>";
    echo $html;
  } else {
    echo "Debe ingresar una cantidad de inputs";
  }
?>
