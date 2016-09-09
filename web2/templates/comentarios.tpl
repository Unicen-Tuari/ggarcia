{include file="header.tpl" }

	<div class="container">

		<form>
		  <div class="form-group">
		    <label for="name">Nombre</label>
		    <input type="text" class="form-control" id="idName" name="nName" placeholder="Nombre">
		  </div>
		  <div class="form-group">
		    <label for="email">Email</label>
		    <input type="email" class="form-control" id="idEmail" name="nEmail" placeholder="Email">
		  </div>
		  <div class="form-group">
		    <label for="comment">Comentario</label>
		    <textarea class="form-control" id="idComment" rows="3" placeholder="Comentario..."></textarea>
		  </div>
		  <button type="submit" class="btn btn-default" onclick="mostrar()">Enviar</button>
		</form>
		<h1>Comentarios</h1>
		<div id="comments">
		</div>

	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="js/codigoJSej3.js" charset="utf-8"></script>

{include file="footer.tpl"}
