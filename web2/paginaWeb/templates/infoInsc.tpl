<h4>Inscriptos:</h4>
{foreach from=$alumnos item=alumno}
<p>{$alumno['nombre']} - {$alumno['email']} - {$alumno['telefono']}</p>
{/foreach}
