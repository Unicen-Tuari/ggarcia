// JavaScript Document

// funcion que imprime los horarios de las clases de danzas
$("#baby").on("click", function() {
	getInformationByItem("57732bfdaf0cbc0300810f6d");
	return false; // Or ev.preventDefault();
	}
);

$("#clasico").on("click", function() {
	getInformationByItem("57732c0caf0cbc0300810f6e");
	return false; // Or ev.preventDefault();
	}
);

$("#contemporaneo").on("click", function() {
	getInformationByItem("57732c16af0cbc0300810f6f");
	return false; // Or ev.preventDefault();
	}
);

$("#contorsion").on("click", function() {
	getInformationByItem("57732c24af0cbc0300810f70");
	return false; // Or ev.preventDefault();
	}
);

$("#hiphop").on("click", function() {
	getInformationByItem("57732c30af0cbc0300810f71");
	return false; // Or ev.preventDefault();
	}
);

$("#teatro").on("click", function() {
	getInformationByItem("57732c3faf0cbc0300810f72");
	return false; // Or ev.preventDefault();
	}
);

// FIN funcion que imprime los horarios de las clases de danzas

// posible funcion que borra la fila que se cliquea
$("table>tr").on("click", function() {
  $(this).remove();
	return false; // Or ev.preventDefault();
	}
);

//----------------------------------------------------------
// Código realizado por Nacho,Javi en Tupar 2016
function getInformationByGroup(){
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
