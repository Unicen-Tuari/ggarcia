/*
añada debajo del formulario el comentario con el Nombre de la persona capitalizado, el mail truncado en 5 caracteres.
Si el mail es del dominio @gmail.com o @hotmail.com muestre el comentario con un diseño diferente.
*/

function identificarDominio(dom) {
  res = dom.split("@");
  if ((res[1]=="gmail.com") || (res[1]=="hotmail.com")) {
    return true;
  }
  return false;
}

function processAjax() {
  var info = {
    nameKey =  $('#idName').val(),
    emailKey = $('#idEmail').val(),
    commentKey = $('idComment').val()
  };
  $.ajax({
    method:  'POST',
    datatype: 'JSON',
    data: JSON.stringify(info), // lo coloca en un array en el servidor
    contentType: 'application/json; charset=utf-8',
    url: '../comentarioFormateado.php', // http://localhost/Practico02-SMARTY/comentarioFormateado.php
    success: function (response) {
      $("#comments").innerHTML(response); //{include file="comentario_simple.tpl"}
    }
    error:function(jqxml, status, errorThrown){
      console.log(errorThrown);
      alert("Error por favor intente mas tarde");
    }
  });
}

function mostrar() {
  // si dominio es T asignar otro estilo
  if (identificarDominio(document.getElementById("email").val())) {

  } else {

  }
}
