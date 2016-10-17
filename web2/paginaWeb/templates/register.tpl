<div class="container">
  <div class="row">
    <div class="col-xs-1 col-md-offset-1">
    </div>
    <div class="col-xs-8 col-md-4">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Registro</h3>
        </div>
        <div class="panel-body">
          <form>
            <div class="form-group">
              <label for="sel">Seleccionar registro:</label>
              <select class="form-control" id="sel">
                <option>Danza</option>
                <option>Profesor</option>
                <option>Alumno</option>
              </select>
            </div>
            <!-- Form persona -->
            <div class="form-group">
              <label for="name">Nombre</label>
              <input type="text" class="form-control" id="namePersonForm" placeholder="Ingrese nombre">
            </div>
            <div class="form-group hide">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="emailForm" placeholder="Ingrese email">
            </div>
            <div class="form-group">
              <label for="email">Tel&eacute;fono</label>
              <input type="email" class="form-control" id="telForm" placeholder="Ingrese tel&eacute;fono">
            </div>
            <!-- Form clase -->
            <div class="form-group">
              <label for="name">Nombre Danza</label>
              <input type="text" class="form-control" id="nameDanceForm" placeholder="Ingrese nombre">
            </div>
            <div class="form-group">
              <label for="profeAsignado">Profesor asignado</label>
              <input type="email" class="form-control" id="profeAsignado" placeholder="Ingrese email">
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-default">Crear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="js/registros.js" charset="utf8"></script>
