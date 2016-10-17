$(document).ready(function() {
    // cada vez que elijo botón de navigation bar se carga su correspondiente render
  $("#sel").onclick = function(){
    alert($("#sel").val();
  )};
});
/*

//fn que asigna a cada boton eliminar el hash del item REST
function asignarEliminar(i, id){
  var boton = $(".borrar")[i];
  boton.onclick = function(){
    deleteInscripcion(id);
  }
}

// fn que obtiene html a cargar en un div agregando funcionalidad
function webLoader(link) {
  $.ajax({
      type:"GET",
      url: link,
      dataType: "html",
      success: function(data) {
        $("#content").html(data);
      },
      error: function(jqxml, status, errorThrown) {
        $("#content").text("No se pudo cargar la página");
        console.log(errorThrown);
      }
    });
}
*/
