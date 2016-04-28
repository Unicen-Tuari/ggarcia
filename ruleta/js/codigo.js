// JavaScript Document
	// costo de la apuesta
	var costoApuesta = 10;

	// función que verifica que el saldo del participante sea mayor o igual al costo de la apuesta para dejarlo jugar
	function saldoPermitido() {
		if(document.getElementById("saldo").value >= costoApuesta) {
			return true;
		} else {
			document.getElementById("avisoProblema").innerHTML = "No dispone de saldo suficiente para jugar";
			document.getElementById("play").disabled = true;
			return false;
		}
	}

	// función que valida que el número apostado esté dentro del rango permitido
	function validarApuesta() {
		if ((!document.getElementById("numero").isNULL) && (document.getElementById("numero").value != "")) {
			if ((document.getElementById("numero").value >= 0) && (document.getElementById("numero").value <= 9)) {
				return true;
			} else {
				document.getElementById("avisoProblema").innerHTML = "Debe ingresar un número entre 0 y 9";
				return false;
			}
		} else {
			alert("Debe ingresar un número para apostar");
			return false;
		}
	}

	// función que verifica que el monto apostado sea mayor que cero
	function saldoApostado() {
		if(document.getElementById("apuesta").value > 0) {
			return true;
		} else {
			alert("Debe apostar un monto mayor");
			return false;
		}
	}

	// función que calcula el saldo del participante, si éste ganó
	function ganador() {
		document.getElementById("avisoProblema").innerHTML = "¡¡ Ud. es un GANADOR !!";
		return (2 * Number(document.getElementById("numero").value) - costoApuesta);
	}

	// función que calcula el saldo del participante, si éste perdió
	function perdedor() {
		document.getElementById("avisoProblema").innerHTML = "¡¡ Intente nuevamente !!";
		return (costoApuesta);
	}

	// función para iniciar el juego
	function goPlay() {
		var resultadoRuleta = Math.floor((Math.random() * 10));
		document.getElementById("nroGanador").innerHTML = "Número ganador: " + resultadoRuleta;
		if (saldoPermitido() && validarApuesta() && saldoApostado()) {
			if (document.getElementById("numero").value == resultadoRuleta) {
				document.getElementById("saldo").value = Number(document.getElementById("saldo").value) + Number(ganador());
			} else {
				document.getElementById("saldo").value = Number(document.getElementById("saldo").value) - Number(perdedor());
			}
		}
		
	}