<div class="container">
  <div class="row">
    <div class="col-sm-6">

      <div class="panel-group" id="accordion1">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion1" href="#collapse1">Alta de Danzas</a>
            </h4>
          </div>
          <div id="collapse1" class="panel-collapse collapse">
            <div class="panel-body">
              <form id="registroClase">
                <div class="form-group">
                  <label for="name">Nombre Danza</label>
                  <input type="text" class="form-control" id="nameDanceForm" placeholder="Ingrese nombre"></input>
                </div>
                <div class="form-group">
                  <label for="name">Informaci&oacute;n</label>
                  <textarea type="textarea" class="form-control" id="infoDanceForm" placeholder="Ingrese informaci&oacute;n"></textarea>
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
              <a data-toggle="collapse" data-parent="#accordion1" href="#collapse2">Asignación de Profesor a Clase</a>
            </h4>
          </div>
          <div id="collapse2" class="panel-collapse collapse">
            <div class="panel-body">
              <form id="asignar">
                <div class="form-group">
                  <label for="selDanza">Danza</label>
                  <select class="form-control" id="selDanza">
                    <option></option>
                    {foreach from=$danzas item=danza}
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
                  <a class="btn btn-link" id="desasignar">Desasignar</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion1" href="#collapse3">Eliminar Danzas</a>
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
      <div class="panel-group" id="accordion2">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion2" href="#collapse4">Alta de Persona</a>
            </h4>
          </div>
          <div id="collapse4" class="panel-collapse collapse">
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
                  <input type="text" class="form-control" id="namePersonForm" placeholder="Ingrese nombre"></input>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="emailForm" placeholder="Ingrese email"></input>
                </div>
                <div class="form-group">
                  <label for="email">Tel&eacute;fono</label>
                  <input type="text" class="form-control" id="telForm" placeholder="Ingrese tel&eacute;fono"></input>
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
              <a data-toggle="collapse" data-parent="#accordion2" href="#collapse5">Actualizar/Eliminar Persona</a>
            </h4>
          </div>
          <div id="collapse5" class="panel-collapse collapse">
            <div class="panel-body">
              <div class="form-group">
                <button data-toggle="collapse" data-target="#profe">Profesores</button>
                <div id="profe" class="collapse">
                  <ul>
                    {foreach from=$profes item=profe}
                      <li>
                        {$profe['nombre']}
                        <a href="#" data-id="{$profe['id']}" class="updateProfesor_btn"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></a>
                        <a href="#" data-id="{$profe['id']}" class="deleteProfesor_btn"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a>
                      </li>
                    {/foreach}
                  </ul>
                </div>
              </div>
              <div class="form-group">
                <button data-toggle="collapse" data-target="#alum">Alumnos</button>
                <div id="alum" class="collapse">
                  <ul>
                    {foreach from=$alumnos item=alumno}
                      <li>
                        {$alumno['nombre']}
                        <a href="#" data-id="{$alumno['id']}" class="updateAlumno_btn"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></a>
                        <a href="#" data-id="{$alumno['id']}" class="deleteAlumno_btn"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a>
                      </li>
                    {/foreach}
                  </ul>
                </div>
              </div>
            </div>
          <p class="info">No se puede eliminar una persona si est&aacute; inscripta/asignada a una danza</p>
          </div>

      </div>
    </div>
  </div>
</div>
