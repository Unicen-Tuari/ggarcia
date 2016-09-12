<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Figuras</title>
  </head>
  <body>
    <ul>
    {foreach from = $figuras item=figura}
      <li>{$figura->tipo}, area: {$figura->getArea()}</li>
    {/foreach}
  </ul>
  </body>
</html>
