<?php

  class DanceModel {

    private $db;

    function __construct() {
      $this->db = new PDO('mysql:host=localhost;dbname=flyartdb;charset=utf8', 'root', '');
    }

    function getDances() {
      $danceList = [];
      $select = $this->db->prepare("select * from clase");
      $select->execute();
      $dances = $select->fetchAll(PDO::FETCH_ASSOC);
      foreach ($dances as $dance) {
        $danceList[] = $dance;
      }
      return $danceList;
    }

    function getStudentsByDance($danceId) {
      $studentList = [];
      $select = $this->db->prepare("SELECT alumno.* FROM alumno INNER JOIN inscripto ON inscripto.id_alumno = alumno.id AND inscripto.id_clase = ?");
      $select->execute(array($danceId));
      $students = $select->fetchAll(PDO::FETCH_ASSOC);
      foreach ($students as $student) {
        $studentList[] = $student;
      }
      return $studentList;
    }

    function addStudentByDance($danceId, $nameStudent, $emailStudent) {
      $insertStudent = $this->db->prepare("INSERT INTO alumno(nombre, email) VALUES(?,?)");
      $insertStudent->execute(array($nameStudent,$emailStudent));
      $fk_student = $this->db->lastInsertId();
      $signIn = $this->db->prepare("INSERT INTO inscripto(id_alumno, id_clase) VALUES(?,?)");
      $signIn->execute(array($fk_student,$danceId));
    }

    function deleteSignIn($row){
      $delete = $this->db->prepare("DELETE FROM inscripto WHERE rowId=?");
      $delete->execute(array($index));
    }


/*

    function addTask($task, $description,$images){
      $insert = $this->db->prepare("INSERT INTO tarea(Titulo, Descripcion) VALUES(?,?)");
      $insert->execute(array($task,$description));
      $fk_tarea = $this->db->lastInsertId();

      foreach ($images as $image) {
        $path_image =  $this->copyImage($image);
        $insert = $this->db->prepare("INSERT INTO imagen(path, fk_tarea) VALUES(?,?)");
        $insert->execute(array($path_image,$fk_tarea));
      }
    }

    function deleteTask($index){
      $delete = $this->db->prepare("delete from tarea where id_tarea=?");
      $delete->execute(array($index));
    }

    function toggleStatusTask($index){
      $select = $this->db->prepare("select finalizada from tarea where id_tarea=?");
      $select->execute(array($index));
      $estadoTarea= $select->fetch();
      $nuevoEstado=!$estadoTarea['finalizada'];
      $update = $this->db->prepare("update tarea set finalizada=? where id_tarea=?");
      $update->execute(array($nuevoEstado,$index));
    }

    function copyImage($image){
      $path = 'images/'.uniqid().$image["name"];
      move_uploaded_file($image["tmp_name"], $path);
      return $path;
    }
*/

  }
?>
