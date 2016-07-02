// JavaScript Document
"use strict";

// Declaro constantes globales
const rojo = "ROJO";
const negro = "NEGRO";

const probabilidad0 = 0.5; // probabilidad
const costoRevancha = 10;
const costoApuesta = 1; // costo de la apuesta

// Tipos de apuesta

/*
var premioBet = {
  plenoGanado : 10,
  colorGanado : 10,
  parGanado : 10,
  imparGanado : 10,
  mayorGanado : 10,
  menorGanado : 10 }

var tipoBet = {

  tipo : ,
  valor : ;

  color : 10,
  par : 10,
  impar : 10,
  mayor : 10,
  menor : 10 }*/

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
  this.cantidad = 0;
}

Apuesta.prototype.getTipoAp = function() {
  return this.tipo;
}

Apuesta.prototype.getValorAp = function() {
  return this.valor;
}

Apuesta.prototype.getCantidadAp = function() {
  return this.cantdad;
}

Apuesta.prototype.setCantidadAp = function(valor) {
  this.cantidad = valor;
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
    this.calcularGanadores(nroGanador);
  } else {
    $("#avisoProblema").text("Debe realizar al menos una apuesta");
  }
}

Juego.prototype.calcularGanadores = function(nroGanador) {
  var suma=0;
  for(vari=0; i < this.apuestasi[i].length; i++) {
    switch (this.apuestasi[i].getTipoAp()) {
      case expression:

        break;
      default:

    }
  }
}

// fn que verifica: si existe la apuesta la suma, sino la agrega; al final carga el listado de apuestas
Juego.prototype.existeApuesta = function(tipo, valor) {
  var i=0;
  var exit = false;
  while ((i < this.apuestas.length) && (!exit)) {
    if ((this.apuestas[i].getTipoAp() == tipo) && (this.apuestas[i].getValorAp() == valor)) {
      this.apuestas[i].setCantidadAp(1);
      exit = true;
    }
    i++;
  }
  if (!exit)
    this.agregarApuesta(tipo, valor);
  this.mostrarListaAp();
}

Juego.prototype.agregarApuesta = function(tipo, valor) {
  var nuevaAp = new Apuesta(tipo, valor);
  this.apuestas.push(nuevaAp);
}

Juego.prototype.mostrarListaAp = function() {
  var lista="<ul>";
  for (var i=0; i < this.rule.length; i++) {
    lista += "<li>"+this.rule[i].getTipoAp();
    if ((this.rule[i].getTipoAp() == "Pleno") || (this.rule[i].getTipoAp() == "Color"))
      lista += " "+this.rule[i].getValorAp();
    lista += " = $ "+this.rule[i].getCantidadAp()+"</li>";
  }
  lista += "</ul>";
  $("#listado").html(lista);
}

// fn verica que sólo un checkbox esté tildado
Juego.prototype.checkAp = function() {
  var cont = 0;
  var checkboxes = $(".body").checkbox;
  for (var i=0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      cont++;
    }
  }
  if (cont > 1) {
    this.aviso("S&oacute;lo debe existir una apuesta checkeada");
    return false;
  } else {
    return flase;
  }
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
  asignarFuncionalidad(game);
});

function asignarFuncionalidad(game) {
  $("#play").on("click", game.play());
  $("#cero").on("click", game.agregarApuesta("el tipo me lo tiene que dar el checkbox tildado",0));
  $("#uno").on("click", game.agregarApuesta("",1));
  $("#dos").on("click", game.agregarApuesta("",2));
  $("#tres").on("click", game.agregarApuesta("",3));
  $("#cuatro").on("click", game.agregarApuesta("",4));
  $("#cinco").on("click", game.agregarApuesta("",5));
  $("#seis").on("click", game.agregarApuesta("",6));
  $("#siete").on("click", game.agregarApuesta("",7));
  $("#ocho").on("click", game.agregarApuesta("",8));
  $("#nueve").on("click", game.agregarApuesta("",9));
  $("#diez").on("click", game.agregarApuesta("",10));
  $("#negro").on("click", game.agregarApuesta("",negro));
  $("#rojo").on("click", game.agregarApuesta("",rojo));
}
