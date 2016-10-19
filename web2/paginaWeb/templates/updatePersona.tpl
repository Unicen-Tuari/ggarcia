<div class="container">
  <div class="row">
    <div class="col-sm-6">

      {foreach from=$datos item=$dato}
      <h3>Actualizar {$datos['nombre']}</h3>

      <form id="updatePersona">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" class="form-control" id="name" value="{$dato['nombre']}"></input>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" value="{$dato['email']}"></input>
        </div>

        <div class="form-group">
          <label for="tel">Telefono</label>
          <input type="text" class="form-control" id="tel" value="{$dato['telefono']}"></input>
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary">Actualizar</button>
        </div>
      </form>
{/foreach}
    </div>
  </div>
</div>
