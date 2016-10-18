<div class="container">
  <div class="row">

      <div class="col-sm-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Alta de Clase</h3>
          </div>
          <div class="panel-body">
            <form>
              <div class="form-group">
                <label for="name">Nombre Danza</label>
                <input type="text" class="form-control" id="nameDanceForm" placeholder="Ingrese nombre">
              </div>
              <div class="form-group">
                <label for="profeAsignado">Profesor asignado</label>
                <input type="text" class="form-control" id="profeAsignado" placeholder="Ingrese Id profesor">
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Registrar</button>
              </div>
            </form>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Asignación de Profesor a Clase</h3>
          </div>
          <div class="panel-body">
            <form>
              <div class="form-group">
                <label for="selDanza">Danza</label>
                <select class="form-control" id="selDanza">
                  {foreach from=$danzas item=danza}
                    <option value="{$danza['id']}">{$danza['nombre']}</option>
                  {/foreach}
                </select>
              </div>
              <div class="form-group">
                <label for="profeAsignado">Profesor</label>
                <select class="form-control" id="idProfeAsignado">
                  {foreach from=$profes item=profe}
                    <option value="{$profe['id']}">{$profe['nombre']}</option>
                  {/foreach}
                </select>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary" id="asignar">Asignar</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Alta de Persona</h3>
          </div>
          <div class="panel-body">
            <form>
              <div class="form-group">
                <select class="form-control" id="sel">
                  <option>Profesor</option>
                  <option>Alumno</option>
                </select>
              </div>
              <div class="form-group">
                <label for="name">Nombre</label>
                <input type="text" class="form-control" id="namePersonForm" placeholder="Ingrese nombre">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="emailForm" placeholder="Ingrese email">
              </div>
              <div class="form-group">
                <label for="email">Tel&eacute;fono</label>
                <input type="text" class="form-control" id="telForm" placeholder="Ingrese tel&eacute;fono">
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>

  </div>
</div>
