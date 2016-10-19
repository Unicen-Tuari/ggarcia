<div class="container">

  <form id="inscribir">
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
      <button type="submit" class="btn btn-primary">Inscribirse</button>
    </div>
  </form>

  <form>
    <div class="form-group">
      <div class="row">
        {foreach from=$inscriptos item=sign}
        <p>
          {$sign['claseNombre']} - {$sign['alumnoNombre']}
          <a href="#" data-id="{$sign['rowId']}" class="delete_btn"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a>
        </p>
        {/foreach}
      </div>
    </div>
  </form>

</div>
