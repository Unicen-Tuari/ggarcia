// JavaScript Document
"use strict";

// constantes globales: nombres de los botones de navegacion
/*const baby = "baby";
const clasico = "clasico";
const contemporaneo = "contemporaneo";
const contorsion = "contorsion";
const hiphop = "hiphop";
const teatro = "teatro";
*/
const home = "home";
const clase = "clase";
const contacto = "contacto";
const inscripcion = "inscripcion";

// al terminar de cargar el html principal, cargo partial render de home
$(document).ready(function(){
  loadRender("./sections/homeSection.html");
})

// cada vez que elijo botón de navigation bar se carga su correspondiente render
$("#home").on("click",function() {loadRender("./sections/homeSection.html",home)});
$("#clase").on("click",function() {loadRender("./sections/clasesSection.html",clase)});
$("#contact").on("click",function() {loadRender("./sections/contactoSection.html",contacto)});
$("#insc").on("click",function() {loadRender("./sections/inscripcionSection.html"),inscripcion});

// fn Partial Render que obtiene html a cargar en un div agregando funcionalidad
function loadRender(link,solapa) {
  $.ajax(
    {
      type:"GET",
      url: link,
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
      dataType: "html",
      error:function(jqxml, status, errorThrown){
        $("#partialRender").text("No se pudo cargar la página");
        console.log(errorThrown);
      }
    }
  );
}

// funcion que imprime los horarios de las clases de danzas
function setFuncionalidadClases() {
  $("#baby").on("click", function(ev) {
  	// aca va la tabla o lo que le quiera poner al lado de la imagen
  	ev.preventDefault();
  });

  $("#clasico").on("click", function(ev) {
    // aca va la tabla o lo que le quiera poner al lado de la imagen
  	ev.preventDefault();
  });

  $("#contemporaneo").on("click", function(ev) {
  	// aca va la tabla o lo que le quiera poner al lado de la imagen
  	 ev.preventDefault();
  });

  $("#contorsion").on("click", function(ev) {
  	// aca va la tabla o lo que le quiera poner al lado de la imagen
  	ev.preventDefault();
  });

  $("#hiphop").on("click", function(ev) {
  	// aca va la tabla o lo que le quiera poner al lado de la imagen
  	ev.preventDefault();
  });

  $("#teatro").on("click", function(ev) {
  	// aca va la tabla o lo que le quiera poner al lado de la imagen
  	ev.preventDefault();
  });
}

//----------------------------------------------------------

// fn que obtiene los datos del servicio REST
function getInscripciones() {
  event.preventDefault();
  var grupo = 9;
  $.ajax({
     method: "GET",
     dataType: 'JSON',
     url: "http://web-unicen.herokuapp.com/api/group/" + grupo,
     success: function(infoRest){
       cargarTablaInsc(infoRest);
     },
     error:function(jqxml, status, errorThrown){
       console.log(errorThrown);
     }
  });
}

function cargarTablaInsc(infoRest) {
  var html = "";
  for (var i = 0; i < infoRest.information.length; i++) {
    html += '<tr>';
    html += '<td>'+infoRest.information[i]['thing'].clase+'</td>';
    html += '<td>'+infoRest.information[i]['thing'].nombre+'</td>';
    html += '<td>'+infoRest.information[i]['thing'].email+'</td>';
    html += '<td><input class="btn eliminar" type="button" value="'+infoRest.information[i]['_id'] +'"></input>'
    html += '</tr>';
  }
  $("#tablaInsc").html(html);
  /*var botonesEliminar = $(".eliminar");
  for (var i = 0; i < botonesEliminar.length; i++) {
    asignarBtnEliminar(i, resultData.information[i]['_id']);
  }*/
}

function guardarInscripcion(){
  event.preventDefault();
  var grupo = 9;
  var informacion = {
    clase: $("#selectClase").val(),
    nombre: $("#alumno").val(),
    email: $("#email").val()
  };
  var info = {
    group: grupo,
    thing: informacion
  };
  if (grupo && informacion){
    $.ajax({
      method: "POST",
      dataType: 'JSON',
      data: JSON.stringify(info),
      contentType: "application/json; charset=utf-8",
      url: "http://web-unicen.herokuapp.com/api/create",
      success: function(resultData){
        alert("Informacion guardada con ID=" + resultData.information._id);
        console.log(resultData);
      },
      error:function(jqxml, status, errorThrown){
        console.log(errorThrown);
        alert("Error por favor intente mas tarde");
      }
    });
  } else {
    alert("Grupo e Informacion son campos requeridos");
  }
}

function getInformationByItem(item){
  event.preventDefault();
  $.ajax({
     method: "GET",
     dataType: 'JSON',
     //si la info va en la URL o se pasa por "data" depende del servicio
     url: "http://web-unicen.herokuapp.com/api/get/" + item,
     success: function(resultData){
       $("#infoItem").html(resultData.information['thing']);
     },
     error:function(jqxml, status, errorThrown){
       console.log(errorThrown);
     }

  });
}

function deleteInformationByItem(item) {
  var id=item;
  $.ajax({
    url:"http://web-unicen.herokuapp.com/api/delete/" + id,
    method:"DELETE",
    success: function(resultData){
      console.log(resultData);
      getInformationByGroup();
    },
    error:function(jqxml, status, errorThrown){
      alert('Error!');
      console.log(errorThrown);
    }
  });
}
