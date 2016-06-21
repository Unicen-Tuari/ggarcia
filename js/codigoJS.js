// JavaScript Document

// funcion que imprime los horarios de las clases de danzas
$("#baby").on("click", function() {
	$("#horario").html("<h4>Profesora: Laureana</h4><table><tr><td>Lunes</td><td>16 hs - 18 hs</td></tr><tr><td>Mi&eacute;rcoles</td><td>16 hs - 18 hs</td></tr><tr><td>Viernes</td><td>16 hs - 18 hs</td></tr></table>");
	$("table").css("font-size", "14px");
	return false; // Or ev.preventDefault();
	}
);

$("#clasico").on("click", function() {
	$("#horario").html("<h4>Profesora: Fernanda</h4><table><tr><td>Martes</td><td>18 hs - 20 hs</td></tr><tr><td>Mi&eacute;rcoles</td><td>18 hs - 19 hs</td></tr><tr><td>Viernes</td><td>18 hs - 20 hs</td></tr></table>");
	$("table").css("font-size", "14px");
	return false; // Or ev.preventDefault();
	}
);

$("#contemporaneo").on("click", function() {
	$("#horario").html("<h4>Profesora: Milagros</h4><table><tr><td>Jueves</td><td>16 hs - 18 hs</td></tr><tr><td>Viernes</td><td>19 hs - 21 hs</td></tr></table>");
	$("table").css("font-size", "14px");
	return false; // Or ev.preventDefault();
	}
);

$("#contorsion").on("click", function() {
	$("#horario").html("<h4>Profesora: Claudia</h4><table><tr><td>Lunes</td><td>19 hs - 22 hs</td></tr><tr><td>Martes</td><td>14 hs - 16 hs</td></tr><tr><td>Viernes</td><td>17 hs - 19 hs</td></tr></table>");
	$("table").css("font-size", "14px");
	return false; // Or ev.preventDefault();
	}
);

$("#hiphop").on("click", function() {
	$("#horario").html("<h4>Profesora: Jacqueline</h4><table><tr><td>Lunes</td><td>16 hs - 18 hs</td></tr><tr><td>Mi&eacute;rcoles</td><td>16 hs - 18 hs</td></tr><tr><td>Viernes</td><td>16 hs - 18 hs</td></tr></table>");
	$("table").css("font-size", "14px");
	return false; // Or ev.preventDefault();
	}
);

$("#teatro").on("click", function() {
	$("#horario").html("<h4>Profesor: Sebasti&aacuten</h4><table><tr><td>Jueves</td><td>16 hs - 18 hs</td></tr><tr><td>Viernes</td><td>19 hs - 21 hs</td></tr></table>");
	$("table").css("font-size", "14px");
	return false; // Or ev.preventDefault();
	}
);

// FIN funcion que imprime los horarios de las clases de danzas
