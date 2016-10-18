$(document).ready(function() {
  // cada vez que elijo botón de navigation bar se carga su correspondiente render
  $("#home").on("click",function() {
    event.preventDefault();
    webLoader("index.php?action=home")});
  $("#clase").on("click",function() {
    event.preventDefault();
    webLoader("index.php?action=dance")});
  $("#insc").on("click",function() {
    event.preventDefault();
    webLoader("index.php?action=inscripcion")});
  $("#contact").on("click",function() {
    event.preventDefault();
    webLoader("index.php?action=contact_us")});
  $("#register").on("click",function() {
    event.preventDefault();
    webLoader("index.php?action=register")});
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
/*
$('#asignar').submit(function(){
  event.preventDefault();
  var formData = new FormData(this);
  $.ajax({
   method: "POST",
   url: "index.php?action=assign_dance_teacher",
   data: formData,
   contentType: false,
   cache: false,
   processData:false,
   success: function(data){
     refreshList(data);
     $('#addForm').trigger("reset");
   }
 });

 $('#inscribir').submit(function(){
   event.preventDefault();
   var formData = new FormData(this);
   $.ajax({
    method: "POST",
    url: "index.php?action=subscribe",
    data: formData,
    contentType: false,
    cache: false,
    processData:false,
    success: function(data){
      refreshList(data);
      $('#addForm').trigger("reset");
    }
  });
}
*/
function deleteSignUp(rowId) {
  event.preventDefault();
  var formData = new FormData(this);
  $.ajax({
    method: "POST",
    url: "index.php?action=unsubscribe&row=rowId",
    data: formData,
    contentType: false,
    cache: false,
    processData:false,
    success: function(data) {
      webLoader("index.php?action=inscripcion");
    }
  });
}
