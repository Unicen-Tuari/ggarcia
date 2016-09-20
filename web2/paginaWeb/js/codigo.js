// cada vez que elijo botón de navigation bar se carga su correspondiente render
$("#home").on("click",function() {webLoader("index.php?action=home")});
$("#clase").on("click",function() {webLoader("index.php?action=dance")});
$("#contact").on("click",function() {webLoader("index.php?action=contact_us")});

// fn que obtiene html a cargar en un div agregando funcionalidad
function webLoader(link) {
  $.ajax({
      type:"GET",
      url: link,
      dataType: "html",
      success: function(data) {
        $("#partialRender").html(data);
        switch(solapa) { // debo agregar funcionalidad a las páginas que lo necesitan
          case clase: {
            setFuncionalidadClases();
            break;
          }
          case inscripcion: {
            getInscripciones(); //muestro info en tabla
            $("#saveInscripcion").on("click",function() {guardarInscripcion()});
            break;
          }
        }
      },
      error:function(jqxml, status, errorThrown){
        $("#partialRender").text("No se pudo cargar la página");
        console.log(errorThrown);
      }
    });
}
