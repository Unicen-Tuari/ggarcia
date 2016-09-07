{include file="header.tpl" }

	<div class="container">

		<form>
		  <div class="form-group">
		    <label for="name">Nombre</label>
		    <input type="text" class="form-control" id="name" name="Nombre" placeholder="Nombre">
		  </div>
		  <div class="form-group">
		    <label for="email">Email</label>
		    <input type="email" class="form-control" id="email" name="Email" placeholder="Email">
		  </div>
		  <div class="form-group">
		    <label for="comment">Comentario</label>
		    <textarea class="form-control" id="comment" rows="3" placeholder="Comentario..."></textarea>
		  </div>
		  <button type="submit" class="btn btn-default" onclick="mostrar()">Enviar</button>
		</form>
		<h1>Comentarios</h1>
		<div id="comments">
			{include file="comentario_simple.tpl"}
		</div>

	</div>

	<script>
		function IdentificarDominio(document.getElementById("email").val()) {
			res = dom.split("@");
			if ((res[1]=="gmail.com") || (res[1]=="hotmail.com")) {
				return true;
			}
			return false;
		}

		function asignar() {
			document.getElementById("aLink").innerHTML= {word = Nombre|capitalize:true};
		}

		function mostrar() {
			asignar();
			if (IdentificarDominio()) {
				document.getElementById("aLinkSmall").innerHTML =
			}
		}
	</script>

{include file="footer.tpl"}
