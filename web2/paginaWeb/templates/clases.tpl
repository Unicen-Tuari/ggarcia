<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h1>Danzas</h1>
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img id="baby" src="./img/baby.jpg?raw=true" alt="Baby">
          </div>
          <div class="item">
            <img id="clasico" src="./img/clasico.jpg?raw=true" alt="Clasico">
          </div>
          <div class="item">
            <img id="contemporaneo" src="./img/contemporaneo.jpg?raw=true" alt="Contemporáneo">
          </div>
          <div class="item">
            <img id="contorsion" src="./img/contorsion.jpg?raw=true" alt="Contorsión">
          </div>
          <div class="item">
            <img id="hiphop" src="./img/hiphop.jpg?raw=true" alt="HipHop">
          </div>
          <div class="item">
            <img id="teatro" src="./img/teatro.jpg?raw=true" alt="Teatro">
          </div>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Anterior</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Siguiente</span>
        </a>
      </div>
    </div>
    <div class="col-md-6 col-md-6-offset">
      <select class="form-control" id="selDanzaInfo">
        {foreach from=$danzas item=danza}
          <option value="{$danza['id']}">{$danza['nombre']}</option>
        {/foreach}
      </select>
      <div id="infoItem"></div>
    </div>
  </div>
</div>
