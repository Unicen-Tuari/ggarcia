<div class="container">
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
      <label for="student">Alumno</label>
      <select class="form-control" id="student">
        {foreach from=$alumnos item=alumno}
          <option value="{$alumno['id']}">{$alumno['nombre']}</option>
        {/foreach}
      </select>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary" id="inscribir">Inscribirse</button>
    </div>
  </form>

  <div class="form-group">
    <div class="row">
      {foreach from=$inscriptos item=sign}
      <p>{$sign['rowId']} - {$sign['claseId']} - {$sign['claseNombre']} - {$sign['alumnoId']} - {$sign['alumnoNombre']} - {$sign['alumnoEmail']}</p>
      {/foreach}
    </div>
  </div>

</div>
<!--
  ACA ESTARIA BUENO PODER AGRUPAR LA INFORMACION EN PANELES QUE COLAPSEN
  <div class="panel-group" id="accordion">
    {foreach from=$subscribers item=sign}
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#{$danza['id']}">{$danza["nombre"]}</a>
        </h4>
      </div>
      <div id="{$danza['id']}" class="panel-collapse collapse in">
        <div class="panel-body">
          <ul class="list-group">
            {foreach from=$alumnos item=alumno}
          </ul>
        </div>
      </div>
    </div>
    {/foreach}
  </div>

-->
