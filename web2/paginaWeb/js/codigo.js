function setearFuncionalidad() {
  // botones de navegación
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

  // borra la inscripción de un alumno a una clase
  $('.delete_btn').on("click",function() {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "index.php?action=unsubscribe&dataId=" + $(this).attr("data-id"),
      success: function(data) {
        webLoader("index.php?action=inscripcion");
      }
    });
  })

  // alta de una danza sin profesor asignado
  $('#registroClase').on("submit",function() {
    event.preventDefault();
    var formData = new FormData(this);
    $.ajax({
     method: "POST",
     url: "index.php?action=add_dance&nameD=" + $("#nameDanceForm").val(),
     data: formData,
     contentType: false,
     cache: false,
     processData:false,
     success: function(data){
       webLoader("index.php?action=register");
     }
   });
  });

  // asignación de un profesor a una clase
  $('#asignar').on("submit",function() {
    event.preventDefault();
    var formData = new FormData(this);
    $.ajax({
     method: "POST",
     url: "index.php?action=assign_dance_teacher&idDanza=" + $("#selDanza").val() + "&idProfe=" + $("#selProfe").val(),
     data: formData,
     contentType: false,
     cache: false,
     processData:false,
     success: function(data){
       webLoader("index.php?action=register");
     }
   });
  });

}

$(document).ready(function() {
  setearFuncionalidad();
});

// fn que obtiene html a cargar en un div agregando funcionalidad
function webLoader(link) {
  $.ajax({
      type:"GET",
      url: link,
      dataType: "html",
      success: function(data) {
        $("#content").html(data);
        setearFuncionalidad();
      },
      error: function(jqxml, status, errorThrown) {
        $("#content").text("No se pudo cargar la página");
        console.log(errorThrown);
      }
    });
}
