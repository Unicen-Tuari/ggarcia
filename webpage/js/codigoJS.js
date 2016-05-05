// JavaScript Document

// resetear color de fondo de las celdas
function resetColorTabla() {
	var i,j;
	var dias=6;
	var horas=7;
	var celda="";
	for(i=2; i<=horas; i++) {
		for(j=2; j<=dias; j++) {
			document.getElementById((String(i)+String(j))).style.backgroundColor= '#9A011F';
		}
	}
}

// se colorean las celdas de los horarios dependiendo de la clase
function colorearHorario(clase) {
	var i=0;
	var celda = new Array();
	switch(clase) {
    case "clasico":
    	celda=[22,32,44,54];
      break;
		case "contemporaneo":
		  celda=[42,52,62,25,35];
		  break;
		case "teatro":
		  celda=[23,33,56,66];
		  break;
		case "hiphop":
		  celda=[25,35,53,63,73];
		  break;
		case "baby":
		  celda=[26,36,54,64];
		  break;
		case "contorsion":
		  celda=[34,44,45,55,66,76];
		  break;
	}
	for (i=0; i < celda.length ; i++) {
		document.getElementById(String(celda[i])).style.backgroundColor= 'grey';
	}
}
//.style.backgroundColor
// función que cambia la imagen seg&uacute; la variable por par&aacute;metro
function cambiarImag(clase) {
	// se resetean los colores de las celdas de los horarios
	resetColorTabla();
	// se carga la imagen de la clase
	document.getElementById("campoImg").src = "img/"+clase+".jpg";
	colorearHorario(clase);
}
