<h3>Inscriptos:</h3>
{foreach from=$alumnos item=alumno}
<p>{$alumno['nombre']} - {$alumno['email']} - {$alumno['telefono']}</p>
{/foreach}
