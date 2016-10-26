<div class="container">
  <div class="row">
      <h1>Danzas</h1>
      <select class="form-control" id="selDanzaInfo">
        {foreach from=$danzas item=danza}
          <option value="{$danza['id']}">{$danza['nombre']}</option>
        {/foreach}
      </select>
      <div id="infoItem"></div>
  </div>
</div>
