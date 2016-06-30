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
const render = "render";

// al terminar de cargar el html principal, cargo partial render de home
$(document).ready(function(){
  loadRender("./sections/homeSection.html");
})

// cada vez que elijo botón de navigation bar se carga su correspondiente render
$("#home").on("click",function() {loadRender("./sections/homeSection.html",home)});
$("#clase").on("click",function() {loadRender("./sections/clasesSection.html",clase)});
$("#contact").on("click",function() {loadRender("./sections/contactoSection.html",contacto)});
$("#rest").on("click",function() {loadRender("./sections/inscripcionSection.html"),render});

// fn Partial Render que obtiene html a cargar en un div agregando funcionalidad
function loadRender(link,solapa) {
  $.ajax(
    {
      type:"GET",
      url: link,
      success: function(data) {
        $("#partialRender").html(data);
        switch(solapa) { // debo agregar funcionalidad a las páginas que lo necesitan
          case clase:
            setFuncionalidadClases();
            break;
          case render:
            setFuncionalidadInscripcion();
            break;
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
  	getInformationByItem("57732bfdaf0cbc0300810f6d");
  	ev.preventDefault();
  });

  $("#clasico").on("click", function(ev) {
  	getInformationByItem("57732c0caf0cbc0300810f6e");
  	ev.preventDefault();
  });

  $("#contemporaneo").on("click", function(ev) {
  	getInformationByItem("57732c16af0cbc0300810f6f");
  	 ev.preventDefault();
  });

  $("#contorsion").on("click", function(ev) {
  	getInformationByItem("57732c24af0cbc0300810f70");
  	ev.preventDefault();
  });

  $("#hiphop").on("click", function(ev) {
  	getInformationByItem("57732c30af0cbc0300810f71");
  	ev.preventDefault();
  });

  $("#teatro").on("click", function(ev) {
  	getInformationByItem("57732c3faf0cbc0300810f72");
  	ev.preventDefault();
  });
}

//----------------------------------------------------------

function setFuncionalidadInscripcion() {

}

// Código realizado por Nacho,Javi en Tupar 2016
function getInformationByGroup() {
  event.preventDefault();
  var grupo = $("#groupid").val();
  $.ajax({
     method: "GET",
     dataType: 'JSON',
     url: "http://web-unicen.herokuapp.com/api/group/" + grupo,
     success: function(resultData){
       //al ser tipo JSON resultData es un objeto listo para usar
       var html = "";
       for (var i = 0; i < resultData.information.length; i++) {
         html += "Id: " + resultData.information[i]['_id'] + "<br />";
         html += "Grupo: " + resultData.information[i]['group'] + "<br />";
         html += "Informacion: " + resultData.information[i]['thing'] + "<br />";
         html += "--------------------- <br />";
       }
       $("#infoGroup").html(html);
     },
     error:function(jqxml, status, errorThrown){
       console.log(errorThrown);
     }
  });
}

function guardarInformacion(){
  event.preventDefault();
  var grupo = $("#grupo").val();
  var informacion = $("#informacion").val();
  //la estructura que debemos enviar es especifica de cada servicio que usemos
  //en este caso un hay que enviar un objeto con el numero de grupo y con lo que queramos guardarInformacion
  //thing puede ser un objeto JSON con tanta información como queramos (en este servicio)
  var info = {
      group: grupo,
      thing: informacion //puede ser un objeto JSON!
      };

  if (grupo && informacion){
    $.ajax({
       method: "POST",
       dataType: 'JSON',
       //se debe serializar (stringify) la informacion (el "data:" de ida es de tipo string)
       data: JSON.stringify(info),
       contentType: "application/json; charset=utf-8",
       url: "http://web-unicen.herokuapp.com/api/create",
       success: function(resultData){
         $("#guardarAlert").removeClass("alert-danger")
         $("#guardarAlert").addClass("alert-success")
         //como le dimos dataType:"JSON" el resultData ya es un objeto
         //la estructura que devuelve es especifica de cada servicio que usemos
         $("#guardarAlert").html("Informacion guardada con ID=" + resultData.information._id);
         console.log(resultData);
       },
       error:function(jqxml, status, errorThrown){
         console.log(errorThrown);
         $("#guardarAlert").addClass("alert-danger")
         $("#guardarAlert").html("Error por favor intente mas tarde");
       }
    });
  }
  else
  {
    $("#guardarAlert").addClass("alert-danger")
    $("#guardarAlert").html("Grupo e Informacion son campos requeridos");
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

$("#home").on("click",function() {
  deleteInformationByItem("57731686af0cbc0300810ef8");
deleteInformationByItem("577316faaf0cbc0300810efa");
deleteInformationByItem("57731709af0cbc0300810efb");
deleteInformationByItem("577319ffaf0cbc0300810f0e");
deleteInformationByItem("57732bfdaf0cbc0300810f6d");
deleteInformationByItem("57732c0caf0cbc0300810f6e");
deleteInformationByItem("57732c16af0cbc0300810f6f");
deleteInformationByItem("57732c24af0cbc0300810f70");
deleteInformationByItem("57732c30af0cbc0300810f71");
deleteInformationByItem("57732c3faf0cbc0300810f72");
});

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
