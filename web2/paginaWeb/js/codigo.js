$(document).ready(function() {
  // cada vez que elijo botón de navigation bar se carga su correspondiente render
  $("#home").on("click",function() {
    event.preventDefault();
    webLoader("index.php?action=home")});
  $("#clase").on("click",function() {
    event.preventDefault();
    webLoader("index.php?action=dance")});
  $("#contact").on("click",function() {
    event.preventDefault();
    webLoader("index.php?action=contact_us")});
});

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
