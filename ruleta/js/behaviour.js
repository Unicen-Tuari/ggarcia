// JavaScript Document
"use strict";

// Declaro constantes globales
const rojo = "ROJO";
const negro = "NEGRO";

const probabilidad0 = 0.5; // probabilidad
const costoRevancha = 10;
const costoApuesta = 1; // costo de la apuesta
const premio = 10;

// -------------------------------------------------------------------------- //
// Clase Ruleta
function Ruleta() {
  this.casillas = 11;
  this.rueda = new Array(this.casillas);
  this.rueda[0] = undefined;
  this.rueda[1] = rojo;
  this.rueda[2] = negro;
  this.rueda[3] = rojo;
  this.rueda[4] = negro;
  this.rueda[5] = rojo;
  this.rueda[6] = rojo;
  this.rueda[7] = negro;
  this.rueda[8] = rojo;
  this.rueda[9] = negro;
  this.rueda[10] = negro;
}

Ruleta.prototype.Color = function(nro) {
  return this.rueda[nro];
}

Ruleta.prototype.Tirar = function(probabilidad0) {
  if (Math.random() <= probabilidad0){
    return 0;
  } else {
    return Math.floor(Math.random()*((this.casillas)-1))+1;
  }
}
// -------------------------------------------------------------------------- //
// Clase Apuesta
function Apuesta(nombre,valor) {
  this.tipo = nombre;
  this.valor = valor;
  this.cantidad = 1;
}

Apuesta.prototype.getTipoAp = function() {
  return this.tipo;
}

Apuesta.prototype.getValorAp = function() {
  return this.valor;
}

Apuesta.prototype.getCantidadAp = function() {
  return this.cantidad;
}

Apuesta.prototype.sumarCantidadAp = function(valor) {
  this.cantidad += valor;
}
// -------------------------------------------------------------------------- //
// Clase Juego
function Juego() {
  this.rule = new Ruleta();
  this.apuestas = new Array();
}

Juego.prototype.play = function() {
  var nroGanador = 0;
  if (this.apuestas.length > 0) { // el jugador hizo al menos 1 apuesta
    nroGanador = this.rule.Tirar();
    $("#nroGanador").text("Nro Ganador: "+ nroGanador);
    this.calcularGanadores(nroGanador);
  } else {
    $("#avisoProblema").text("Debe realizar al menos una apuesta");
  }
}

// fn que sabe como controlar si se ganó o no dependiendo de la apuesta
Juego.prototype.calcularGanadores = function(nroGanador) {
  var suma=0;
  var lista = "<ul>";
  for(var i=0; i < this.apuestas.length; i++) {
    switch (this.apuestas[i].getTipoAp()) {
      case "PLENO": {
  		  if (nroGanador == this.apuestas[i].getValorAp()) {
  			  suma += (premio * this.apuestas[i].getCantidadAp());
          lista += "<li>Gan&oacute; "+this.apuestas[i].getTipoAp()+" "+this.apuestas[i].getValorAp()+"<li>";
        }
  		  break;}
      case "COLOR": {
  		  if (this.apuestas[i].getValorAp() == this.rule.Color(nroGanador)) {
  			  suma += (premio * this.apuestas[i].getCantidadAp());
          lista += "<li>Gan&oacute; "+this.apuestas[i].getTipoAp()+" "+this.apuestas[i].getValorAp()+"<li>";
        }
  		  break;}
      case "PAR": {
  		  if ((nroGanador % 2) == 0) {
  			  suma += (premio * this.apuestas[i].getCantidadAp());
          lista += "<li>Gan&oacute; "+this.apuestas[i].getTipoAp()+"<li>";
        }
  		  break;}
      case "IMPAR": {
  		  if ((nroGanador % 2) != 0) {
  			  suma += (premio * this.apuestas[i].getCantidadAp());
          lista += "<li>Gan&oacute; "+this.apuestas[i].getTipoAp()+"<li>";
        }
  		  break;}
      case "MAYOR": {
  		  if ((nroGanador >= 6) && (nroGanador <= 10)) {
  			  suma += (premio * this.apuestas[i].getCantidadAp());
          lista += "<li>Gan&oacute; "+this.apuestas[i].getTipoAp()+"<li>";
        }
  		  break;}
      case "MENOR": {
  		  if ((nroGanador >= 1) && (nroGanador <= 5)) {
  			  suma += (premio * this.apuestas[i].getCantidadAp());
          lista += "<li>Gan&oacute; "+this.apuestas[i].getTipoAp()+"<li>";
        }
  		  break;}
    }
  }
  if (suma) { // el jugador ganó
    $("#avisoProblema").text("Ud. ha ganado $ " + suma);
    $("#saldo").text(Number($("#saldo").text())+suma);
    $("#historial").html(lista);
  } else {
    $("#avisoProblema").text("Ud. no ha ganado, hay Revancha si quiere...");
    if (Number($("#saldo").text()) >= costoRevancha) {
      $("#revancha").attr("disabled", false);
    } else {
      $("#avisoProblema").text("Ud. no ha ganado, no tiene Revancha por falta de saldo");
      $("#revancha").attr("disabled", true);
    }
  }
}

Juego.prototype.agregarApuesta = function(tipo, valor) {
  var newAp = new Apuesta(tipo, valor);
  if (!this.existeApuesta(tipo, valor)) {
    this.apuestas.push(newAp);
  }
  $("#saldo").text($("#saldo").text()-costoApuesta);
  this.mostrarListaAp();
}

// fn que verifica: si existe la apuesta la suma y retorna true, sino retorna false
Juego.prototype.existeApuesta = function(tipo, valor) {
  var i=0;
  var exit = false;
  while ((i < this.apuestas.length) && (!exit)) {
    if ((this.apuestas[i].getTipoAp() == tipo) && (this.apuestas[i].getValorAp() == valor)) {
      this.apuestas[i].sumarCantidadAp(1);
      exit = true;
    }
    i++;
  }
  return exit;
}

// fn que muestra por pantalla el listado de las apuestas realizadas
Juego.prototype.mostrarListaAp = function() {
  var lista="<ul>";
  for (var i=0; i < this.apuestas.length; i++) {
    lista += "<li>"+this.apuestas[i].getTipoAp();
    if ((this.apuestas[i].getTipoAp() == "PLENO") || (this.apuestas[i].getTipoAp() == "COLOR"))
      lista += " "+this.apuestas[i].getValorAp();
    lista += " x $ "+this.apuestas[i].getCantidadAp()+"</li>";
  }
  lista += "</ul>";
  $("#listado").html(lista);
}

// fn de avisos
Juego.prototype.aviso = function(msj) {
  $("#avisoProblema").text(msj);
}

// -------------------------------------------------------------------------- //
$(document).ready(function() {
  var game = new Juego();

  $("#saldo").text("100");
  $("#costoAp").text(costoApuesta);
  $("#revancha").attr("disabled", true);

  $("#b_cero").on("click", function() {game.agregarApuesta("PLENO", 0)});
  $("#b_uno").on("click", function() {game.agregarApuesta("PLENO", 1)});
  $("#b_dos").on("click", function() {game.agregarApuesta("PLENO", 2)});
  $("#b_tres").on("click", function() {game.agregarApuesta("PLENO", 3)});
  $("#b_cuatro").on("click", function() {game.agregarApuesta("PLENO", 4)});
  $("#b_cinco").on("click", function() {game.agregarApuesta("PLENO", 5)});
  $("#b_seis").on("click", function() {game.agregarApuesta("PLENO", 6)});
  $("#b_siete").on("click", function() {game.agregarApuesta("PLENO", 7)});
  $("#b_ocho").on("click", function() {game.agregarApuesta("PLENO", 8)});
  $("#b_nueve").on("click", function() {game.agregarApuesta("PLENO", 9)});
  $("#b_diez").on("click", function() {game.agregarApuesta("PLENO", 10)});

  $("#b_black").on("click", function() {game.agregarApuesta("COLOR", "NEGRO")});
  $("#b_red").on("click", function() {game.agregarApuesta("COLOR", "ROJO")});

  $("#b_par").on("click", function() {game.agregarApuesta("PAR", undefined)});
  $("#b_impar").on("click", function() {game.agregarApuesta("IMPAR", undefined)});

  $("#b_mayor").on("click", function() {game.agregarApuesta("MAYOR", undefined)});
  $("#b_menor").on("click", function() {game.agregarApuesta("MENOR", undefined)});

  $("#play").on("click", function() {game.play()});

  $("#re_play").on("click", function() {
    $("#saldo").text("100");
    $("#historial").html("<li></li>");
    $("#listado").html("<li></li>");
    $("#nroGanador").text("Nro Ganador: ");
    game.aviso("Reiniciado");
    $("#revancha").attr("disabled", true);
    game = new Juego();
  });

  $("#revancha").on("click", function() {
    $("#saldo").text($("#saldo").text()-costoRevancha);
    game.play();
    $("#revancha").attr("disabled", true);
  });
});
