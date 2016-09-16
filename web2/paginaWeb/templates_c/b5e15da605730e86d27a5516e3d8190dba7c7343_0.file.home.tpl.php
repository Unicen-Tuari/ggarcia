<?php
/* Smarty version 3.1.30, created on 2016-09-16 12:46:56
  from "D:\165WEBII\ggarcia\web2\paginaWeb\view\templates\home.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_57dbcda0134654_86405573',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'b5e15da605730e86d27a5516e3d8190dba7c7343' => 
    array (
      0 => 'D:\\165WEBII\\ggarcia\\web2\\paginaWeb\\view\\templates\\home.tpl',
      1 => 1474022814,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:view/templates/header.tpl' => 1,
    'file:view/templates/footer.tpl' => 1,
  ),
),false)) {
function content_57dbcda0134654_86405573 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_subTemplateRender("file:view/templates/header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<div class="container">
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <div class="thumbnail">
        <img src="view/img/logo.jpg" alt="Logo"></img>
        <div class="caption">
          <h3>Información descriptiva del estudio de danzas.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod fugit, reiciendis provident numquam dignissimos necessitatibus, similique iusto dicta voluptas nesciunt maiores aliquid sapiente, sequi error voluptatum quaerat odio! Vero, eum.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<?php $_smarty_tpl->_subTemplateRender("file:view/templates/footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<?php }
}
