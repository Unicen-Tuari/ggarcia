<?php
  // recibo un erreglo con la info nameKey, emailKey

  $smartyIncluded-> new Smarty;
  $smartyIncluded->assign('nombreCapit',$_POST['info']=>'nameKey');
  $smartyIncluded->assign('emailFormat',$_POST['info']=>'emailKey');
  $smartyIncluded->assign('comentarioSimple',$_POST['info']=>'commentKey');
?>
