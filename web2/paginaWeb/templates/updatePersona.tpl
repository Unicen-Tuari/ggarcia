<div class="container">
  <div class="row">
    <div class="col-sm-6">

      <h1>Actualizar {$tipoPersona} {$datos.nombre}</h1>

      <form id="updatePersona">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" class="form-control" id="name" value="{$datos.nombre}"></input>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" value="{$datos.email}"></input>
        </div>

        <div class="form-group">
          <label for="tel">Telefono</label>
          <input type="text" class="form-control" id="tel" value="{$datos.telefono}"></input>
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary">Actualizar</button>
        </div>
      </form>

    </div>
  </div>
</div>
