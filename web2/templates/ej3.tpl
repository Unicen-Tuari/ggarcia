{include file="../templates/header.tpl" }

	<script>
		function IdentificarDominio(dom) {
			res = dom.split("@");
			if ((res[1]=="gmail.com") || (res[1]=="hotmail.com")) {
				return true;
			}
			return false;
		}

		function capitalizar() {
			return document.getElementById('Email').innerHTML;
		}

	</script>

	<div class="container">

		<h1>Datos personales</h1>
		<br/>

		<form>
			<div class="form-group">
			<label for="Nombre">Nombre</label>
			<input type="text" class="form-control" id="Nombre" name="Nombre">
			</div>

			<div class="form-group">
			<label for="Email">Email</label>
			<input type="text" class="form-control" id="Email" name="Email">
			</div>

			<div class="form-group">
			<label for="comment">Comment</label>
			<textarea class="form-control" id="Comment" name="Comment"></textarea>
			</div>

			<button type="submit" class="btn btn-primary">Enviar</button>
		</form>

		<div class="row">
			<div class="col-sm-6 col-md-4">
				<div class="thumbnail">
					<div class="caption">
						<h3 id="capital"></h3>{{$name|truncate:(({$name|count_characters})-5):""}|capitalize:true}</h3>

						<p></p>
					</div>
				</div>
			</div>
		</div>

	</div>



{include file="../templates/footer.tpl"}
