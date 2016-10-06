<div class="container">
  <div class="row">
    <h1>Inscripciones</h1>
    <div class="panel-group" id="accordion">

      {$cont = 1}
      {foreach from=$danzas item=danza}
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#{$danza['id']}">{$danza["nombre"]}</a>
            </h4>
          </div>
          <div id="{$danza['id']}" class="panel-collapse collapse">
            <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</div>
          </div>
        </div>
        {$cont++}
      {/foreach}

    </div>
  </div>
</div>
