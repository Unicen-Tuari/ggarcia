// JavaScript Document

	// función da aviso si la web gustó muy poco
	function etiquetar() {
		if ((document.getElementById("siGusto").checked) && (document.getElementById("noGusto").checked)) {
			document.getElementById("maso").innerHTML = "Me gust&oacute; hasta por ah&iacute; nom&aacute;s.";
		} else {
			document.getElementById("maso").innerHTML = " ";
		}
	}