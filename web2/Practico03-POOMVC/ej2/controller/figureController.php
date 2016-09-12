<?php

require("model/figureModel.php");
require("view/figureView.php");

class FigureController {

    private $model;
    private $view;

    function __construct(){
      $this->model = new FigureModel();
      $this->view = new FigureView();
    }

    public function showFigures(){
        //voy al modelo y me traigo las figuras
        $figuras = $this->model->getFigures();

        //Ordeno las figuras
        usort($figuras,array("FigureController","cmp"));
        
        $this->view->mostrar($figuras);
    }

    static function cmp($a, $b)
    {
        if ($a->getArea() == $b->getArea()) {
            return 0;
        }
        return ($a->getArea() < $b->getArea()) ? -1 : 1;
    }
}

 ?>
