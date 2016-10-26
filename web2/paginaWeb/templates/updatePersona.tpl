<div class="container">
  <div class="row">
    <div class="col-sm-6">
      <h3>Actualizar {$datos[0]['nombre']}</h3>

      <form id="updatePersona">
        <div class="form-group">
          <label for="tipo">Tipo</label>
          <input type="text" readonly="" class="form-control" id="tipo" value="{$tipoPersona}"></input>
        </div>

        <div class="form-group">
          <label for="id">Id.</label>
          <input type="text" readonly="" class="form-control" id="id" value="{$datos[0]['id']}"></input>
        </div>

        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" class="form-control" id="name" value="{$datos[0]['nombre']}"></input>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" value="{$datos[0]['email']}"></input>
        </div>

        <div class="form-group">
          <label for="tel">Telefono</label>
          <input type="text" class="form-control" id="tel" value="{$datos[0]['telefono']}"></input>
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary">Actualizar</button>
        </div>
      </form>
    </div>
  </div>
</div>
