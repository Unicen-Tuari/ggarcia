// cada vez que elijo botón de navigation bar se carga su correspondiente render
$("#home").on("click",function() {loadRender("./sections/homeSection.html",home)});
$("#clase").on("click",function() {loadRender("./sections/clasesSection.html",clase)});
$("#contact").on("click",function() {loadRender("./sections/contactoSection.html",contacto)});
$("#insc").on("click",function() {loadRender("./sections/inscripcionSection.html",inscripcion)});

// fn Partial Render que obtiene html a cargar en un div agregando funcionalidad
function loadRender(link,solapa) {
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
