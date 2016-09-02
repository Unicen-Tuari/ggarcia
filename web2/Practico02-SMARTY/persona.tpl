{include file="header.tpl" }

	<div class="container">

		<h1>Datos personales</h1>
		<br/>
    {foreach from=$persona item=info}
  		<form method="post">
  			<div class="form-group">
  			<label for="Nombre">Nombre</label>
  			<input type="text" class="form-control" id="Nombre" name="Nombre" aria-describedby="NombreHelp">
  			</div>

  			<div class="form-group">
  			<label for="Apellido">Apellido</label>
  			<input type="text" class="form-control" id="Apellido" name="Apellido" aria-describedby="ApellidoHelp" placeholder="Gonzalez">
  			</div>


  			<div class="form-group">
  				<label for="example-date-input" class="col-xs-2 col-form-label">Fecha de nacimiento</label>
  				<div class="col-xs-10">
  					<input class="form-control" type="date" value="1998-08-19" id="example-date-input" name="fecha">
  				</div>
  			</div>

  		<button type="submit" class="btn btn-primary">Enviar</button>
  		</form>

  		<div class="row">
  			<div class="col-sm-6 col-md-4">
  				<div class="thumbnail">
  					<div class="caption">
  						<h3>{$info["name"]} {$info["lastName"]}</h3>
  						<p>Fecha de nacimiento: {$info["dateBirth"]}</p>
  						<p>Nació un {$smarty.now|date_format: "%D"}</p>
  						<!--<p>Tiene {cantDias} Días</p>
  						<p>{cantSemanas} Semanas</p>
  						<p>{cantMeses} Meses</p>
  						<p>{cantAnio} Años</p>-->
  					</div>
  				</div>
  			</div>
  		</div>

  	</div>
  {/foreach}


{include file="footer.tpl"}
