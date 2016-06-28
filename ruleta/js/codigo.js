// JavaScript Document
$(document).ready(function() {
	"use strict";

//------------------------- Constantes y Variables -----------------------------
	var saldo = $("#saldo");
	var pleno = $("#plenoBet");
	var color = $("#colorBet");
	var par = $("#parBet");
	var impar = $("#imparBet");
	var mayor = $("#mayorBet");
	var menor = $("#menorBet");
	const costoRevancha = 10;
	const plenoGanado = 10;
	const colorGanado = 10;
	const parGanado = 10;
	const imparGanado = 10;
	const mayorGanado = 10;
	const menorGanado = 10;
	const costoApuesta = 1; // costo de la apuesta
	const rojo = "ROJO";
	const negro = "NEGRO";

//----------------------------- Clase Casillero --------------------------------
	function Casillero(valor, color) {
		this.numero = valor;
		this.colour = color;
	};

	Casillero.prototype.getNro = function() {
		return this.numero;
	};

	Casillero.prototype.getColor = function() {
		return this.colour;
	};

//------------------------------ Clase Ruleta ----------------------------------
	function Ruleta() {
		this.rueda = new Array(11);
		this.rueda[0] = new Casillero(0, undefined);
		this.rueda[1] = new Casillero(1, rojo);
		this.rueda[2] = new Casillero(2, negro);
		this.rueda[3] = new Casillero(3, rojo);
		this.rueda[4] = new Casillero(4, negro);
		this.rueda[5] = new Casillero(5, rojo);
		this.rueda[6] = new Casillero(6, rojo);
		this.rueda[7] = new Casillero(7, negro);
		this.rueda[8] = new Casillero(8, rojo);
		this.rueda[9] = new Casillero(9, negro);
		this.rueda[10] = new Casillero(10, negro);
	};

	Ruleta.prototype.Tirar = function() {
		var tirada = Math.floor(Math.random() * 12);  // retorna valor entre 0 y 11
    return this.rueda[tirada];
	};

	Ruleta.prototype.TirarCargado = function(tirada) {
		var cargado = Math.floor((Math.random() * 2)); // retorna valor entre 0 y 1
    return this.rueda[tirada*cargado];
	};

	// función para saber si se realizó un apuesta o no
	function hayApuesta(valor) {
		if (valor > 0) {
			return true;
		} else {
			return false;
		}
	}

	// función que informa las apuestas ganadas o perdidas
	function informaApuesta(textoBet) {
		var texto = $("#historial").html();
		$("#historial").html(texto + "<li>" + textoBet + "</li>");
	}

	// funcion que verifica que el jugador tenga saldo para seguir apostando
	function esPosibleApostar(cant) {
		var totalApostado = Number(pleno.val()) + Number(color.val()) + Number(par.val()) + Number(impar.val()) + Number(mayor.val()) + Number(menor.val());
		if (cant >= totalApostado) {
			return true;
		} else {
			$("#avisoProblema").text("No es posible apostar esa cantidad");
			return false;
		}
	}

//----------------- Funciones para calcular distintas apuestas -----------------
	function calcularApuestaPleno(casillaWin, premioPleno) {
		var plenoApostado = $("#plenoNro");
		var cantidad = $("#plenoBet");
		if (hayApuesta(cantidad.val()))
			if (plenoApostado.val() == casillaWin.getNro()) {
				informaApuesta("Ganó Pleno " + cantidad.val() * premioPleno);
				return (cantidad.val() * premioPleno - cantidad.val());
			} else {
				informaApuesta("Perdió Pleno");
				return (cantidad.val() * (-1));
			}
		return 0;
	}

	function calcularApuestaColor(casillaWin,premioColor) {
		var colorApostado = $("#color");
		var cantidad = $("#colorBet");
		if (hayApuesta(cantidad.val()))
			if (colorApostado.val() == casillaWin.getColor()) {
				informaApuesta("Ganó Color " + cantidad.val() * premioColor);
				return (cantidad.val() * premioColor - cantidad.val());
			} else {
				informaApuesta("Perdió Color");
				return (cantidad.val() * (-1));
			}
		return 0;
	}

	function calcularApuestaPar(casillaWin, premioPar) {
		var cantidad = $("#parBet");
		if (hayApuesta(cantidad.val()))
			if ((casillaWin.getNro() != 0) && ((casillaWin.getNro() % 2) == 0)) {
				informaApuesta("Ganó Par " + cantidad.val() * premioPar);
				return (cantidad.val() * premioPar - cantidad.val());
			} else {
				informaApuesta("Perdió Par");
				return (cantidad.val() * (-1));
			}
		return 0;
	}

	function calcularApuestaImpar(casillaWin, premioImpar) {
		var cantidad = $("#imparBet");
		if (hayApuesta(cantidad.val()))
			if ((casillaWin.getNro() != 0) && (casillaWin.getNro() % 2 != 0)) {
				informaApuesta("Ganó Impar " + cantidad.val() * premioImpar);
				return (cantidad.val() * premioImpar - cantidad.val());
			} else {
				informaApuesta("Perdió Impar");
				return (cantidad.val() * (-1));
			}
		return 0;
	}

	function calcularApuestaMayor(casillaWin, premioMayor) {
		var cantidad = $("#mayorBet");
		if (hayApuesta(cantidad.val()))
			if ((casillaWin.getNro() != 0) && (casillaWin.getNro() >= 6)) {
				informaApuesta("Ganó Mayor " + cantidad.val() * premioMayor);
				return (cantidad.val() * premioMayor - cantidad.val());
			} else {
				informaApuesta("Perdió Mayor");
				return (cantidad.val() * (-1));
			}
		return 0;
	}

	function calcularApuestaMenor(casillaWin, premioMenor) {
		var cantidad = $("#menorBet");
		if (hayApuesta(cantidad.val()))
			if ((casillaWin.getNro() != 0) && (casillaWin.getNro() < 6)) {
				informaApuesta("Ganó Menor " + cantidad.val() * premioMenor);
				return (cantidad.val() * premioMenor - cantidad.val());
			} else {
				informaApuesta("Perdió Menor");
				return (cantidad.val() * (-1));
			}
		return 0;
	}

	// suma las apuestas ganadas y perdidas
	function sumarApuestas(casilla) {
		var suma = 0;
		suma = (calcularApuestaPleno(casilla,plenoGanado) + calcularApuestaColor(casilla,colorGanado) + calcularApuestaPar(casilla,parGanado) + calcularApuestaImpar(casilla,imparGanado) + calcularApuestaMayor(casilla,mayorGanado) + calcularApuestaMenor(casilla,menorGanado));
		return suma;
	}

	// función que ejecuta la secuencia del juego
	function jugar(cargada) {
		$("#historial").html("<ul></ul>"); // reiniciar la lista historial
		var casilla = new Casillero;
		if (cargada) {
			casilla = roulette.TirarCargado();
		} else {
			casilla = roulette.Tirar();
		}
		var sumaTotal = 0;
		if (esPosibleApostar(saldo.val())) {
			$("#nroGanador").text(casilla.getNro() + " - " + casilla.getColor());
			sumaTotal = sumarApuestas(casilla);
			if($("#revancha").prop("checked")) {
				if (sumaTotal < saldo.val()) { // si no ganó
					saldo.val(Number(saldo.val()) - costoRevancha);
					$("#revancha").prop("checked",false); // destildo la revancha para que no juegue nuevamente (bucle)
					jugar(cargada);
				}
			} else { // si ganó, no es necesaria la revancha
				saldo.val(Number(saldo.val()) + sumaTotal);
			}
		}
	}

	// Creo la ruleta
	var roulette = new Ruleta();
	// seteo apuestas iniciales
	saldo.val(100); // saldo inicial
	pleno.val(0);
	color.val(0);
	par.val(0);
	impar.val(0);
	mayor.val(0);
	menor.val(0);

//----------------------------- Evento Jugar -----------------------------------
	$("#play").on("click", function(ev) {
		jugar(false);
	})

//------------------------- Evento Jugar Cargado -------------------------------
	$("#playCargado").on("click", function(ev) {
		jugar(true);
	})

})
