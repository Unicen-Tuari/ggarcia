// JavaScript Document

	// función que cambia la imagen seg&uacute; la variable por par&aacute;metro
	function cambiarImag(clase) {
		switch(clase) {
			case "contorsion":
				document.getElementById("campoImg").src = "img/contorsion.jpg";
				break;
			case "hiphop":
				document.getElementById("campoImg").src = "img/hiphop.jpg";
				break;
			case "clasico":
				document.getElementById("campoImg").src = "img/clasico.jpg";
				break;
			case "contemporaneo":
				document.getElementById("campoImg").src = "img/contemporaneo.jpg";
				break;
			case "teatro":
				document.getElementById("campoImg").src = "img/teatro.jpg";
				break;
			case "baby":
				document.getElementById("campoImg").src = "img/baby.jpg";
				break;
			default:
				document.getElementById("campoImg").src = "img/logo.jpg";
		}
	}