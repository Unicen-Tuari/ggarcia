{include file="header.tpl"}

	<div class="container">

		<h1>Noticias</h1>
		<br/>

		{foreach from=$noticias item=noticia}
			<div class="blog-post">
				<h2 class="blog-post-title">{$noticia["Titulo"]}</h2>

				<p>{$noticia["Copete"]}</p>
				<hr>
				<p>{$noticia["Cuerpo"]}</p>
			</div>
			<hr>
			<hr>
		{/foreach}
	</div>

{include file="footer.tpl"}
