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

  // imagenes de danzas
  $("#selDanzaInfo").on("change", function() {
    divLoader("index.php?action=info_danza",$("#selDanzaInfo").val(),'informacion');
  });

  // cargo los alumnos de una clase
  $('.info_btn').on("click",function() {
    divLoader("index.php?action=info_danza_inscripto",$(this).attr("data-id"),'inscripto');
  })

  // borra la inscripción de un alumno a una clase
  $('.delete_btn').on("click",function() {
    executeAjaxPOST("index.php?action=unsubscribe&dataId=" + $(this).attr("data-id"),"index.php?action=inscripcion");
  })

  // borra la inscripción de un alumno
  $('.deleteAlumno_btn').on("click",function() {
    executeAjaxPOST("index.php?action=delete_person&tipo=A&dataId=" + $(this).attr("data-id"),"index.php?action=register");
  })
  // borra la inscripción de un profesor
  $('.deleteProfesor_btn').on("click",function() {
    executeAjaxPOST("index.php?action=delete_person&tipo=P&dataId=" + $(this).attr("data-id"),"index.php?action=register");
  })

  // actualiza la inscripción de un alumno
  $('.updateAlumno_btn').on("click",function() {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "index.php?action=show_update_person&tipo=A&dataId=" + $(this).attr("data-id"),
      success: function(data) {
        webLoader("index.php?action=inscripcion");
      }
    });
  })
  // actualiza la inscripción de un profesor
  $('.updateProfesor_btn').on("click",function() {
    /*event.preventDefault();
    $.ajax({
      method: "POST",
      url: "index.php?action=update_profesor&dataId=" + $(this).attr("data-id"),
      success: function(data) {
        webLoader("index.php?action=inscripcion");
      }
    });*/
  })

  // alta de una inscripcion de alumno/danza
  $('#inscribir').on("submit",function() {
    event.preventDefault();
    var formData = new FormData(this);
    $.ajax({
     method: "POST",
     url: "index.php?action=subscribe&idDance=" + $("#selDanza").val() + "&idAlumno=" + $("#student").val(),
     data: formData,
     contentType: false,
     cache: false,
     processData:false,
     success: function(data){
       webLoader("index.php?action=inscripcion");
     }
   });
  });

  // borra la danza
  $('.deleteDanza_btn').on("click",function() {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "index.php?action=delete_dance&dataId=" + $(this).attr("data-idDance"),
      success: function(data) {
        webLoader("index.php?action=register");
      }
    });
  })

  // alta de una danza sin profesor asignado
  $('#registroClase').on("submit",function() {
    event.preventDefault();
    var formData = new FormData(this);
    $.ajax({
     method: "POST",
     url: "index.php?action=add_dance&nameD=" + $("#nameDanceForm").val() + "&infoD=" + $("#infoDanceForm").val(),
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

  // desasignación de un profesor a una clase
  $('#desasignar').on("click",function() {
    event.preventDefault();
    if ($("#selDanza").val()) {
      $.ajax({
        method: "POST",
        url: "index.php?action=deallocate_dance&dataId=" + $("#selDanza").val(),
        success: function(data) {
          webLoader("index.php?action=register");
        }
      });
    } else {
      alert("Debe seleccionar una danza para desasignar al profesor a cargo");
    }
  });

  // alta de una persona
  $('#formPersona').on("submit",function() {
    event.preventDefault();
    var formData = new FormData(this);
    if ($("#sel").val()) {
      $.ajax({
       method: "POST",
       url: "index.php?action=add_person&person=" + $("#sel").val() + "&nameP=" + $("#namePersonForm").val() + "&email=" + $("#emailForm").val() + "&tel=" + $("#telForm").val(),
       data: formData,
       contentType: false,
       cache: false,
       processData:false,
       success: function(data){
         webLoader("index.php?action=register");
       }
     });
   } else {
     alert("Debe seleccionar un tipo de persona: Profesor/Alumno");
   }
  });

  // modificación de un alumno
  $('.updateAlumno_btn').on("click",function() {
    webLoader("index.php?action=show_update_person&tipo=A&dataId=" + $(this).attr("data-id"));
  })

  // modificación de un alumno
  $('.updateProfesor_btn').on("click",function() {
    webLoader("index.php?action=show_update_person&tipo=P&dataId=" + $(this).attr("data-id"));
  })

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

function divLoader(link,id,solapa) {
  $.ajax({
      type:"GET",
      url: link + "&dataId=" + id,
      dataType: "html",
      success: function(data) {
        switch(solapa) {
          case inscripto: {
            $("#sign2dance").html(data);
            setearFuncionalidad();
            break;
          }
          case informacion: {
            $("#infoItem").html(data);
            setearFuncionalidad();
            break;
          }
        }
      },
      error: function(jqxml, status, errorThrown) {
        console.log(errorThrown);
      }
    });
}

function executeAjaxPOST(urlAjax,urlSuccess) {
  event.preventDefault();
  $.ajax({
    method: "POST",
    url: urlAjax,
    success: function(data) {
      webLoader(urlSuccess);
    }
  });
}
