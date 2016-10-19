<div class="container">
  <div class="row">
    <div class="col-sm-6">

      <div class="panel-group" id="accordion">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Alta de Danzas</a>
            </h4>
          </div>
          <div id="collapse1" class="panel-collapse collapse in">
            <div class="panel-body">
              <form id="registroClase">
                <div class="form-group">
                  <label for="name">Nombre Danza</label>
                  <input type="text" class="form-control" id="nameDanceForm" placeholder="Ingrese nombre">
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary">Registrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Asignación de Profesor a Clase</a>
            </h4>
          </div>
          <div id="collapse2" class="panel-collapse collapse">
            <div class="panel-body">
              <form id="asignar">
                <div class="form-group">
                  <label for="selDanza">Danza</label>
                  <select class="form-control" id="selDanza">
                    {foreach from=$danzas item=danza}
                      <option></option>
                      <option value="{$danza['id']}">{$danza['nombre']}</option>
                    {/foreach}
                  </select>
                </div>
                <div class="form-group">
                  <label for="profeAsignado">Profesor</label>
                  <select class="form-control" id="selProfe">
                    <option></option>
                    {foreach from=$profes item=profe}
                      <option value="{$profe['id']}">{$profe['nombre']}</option>
                    {/foreach}
                  </select>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary">Asignar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Eliminar Danzas</a>
            </h4>
          </div>
          <div id="collapse3" class="panel-collapse collapse">
            <div class="panel-body">
              <div class="form-group">
                {foreach from=$danzas item=danza}
                <p>
                  {$danza['nombre']}
                  <a href="#" data-idDance="{$danza['id']}" class="deleteDanza_btn"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a>
                </p>
                {/foreach}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Alta de Persona</h3>
        </div>
        <div class="panel-body">
          <form id="formPersona">
            <div class="form-group">
              <select class="form-control" id="sel">
                <option></option>
                <option value="profesor">Profesor</option>
                <option value="alumno">Alumno</option>
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
