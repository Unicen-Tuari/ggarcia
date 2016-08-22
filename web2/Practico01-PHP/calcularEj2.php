<?php
  if (isset($_GET["st1"]) && isset($_GET["st2"]))
    echo $_GET["st1"] . " " . $_GET["st2"];
  else {
    echo "Hubo un error";
  }
?>
