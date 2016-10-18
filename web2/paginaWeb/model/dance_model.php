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

    function addDance($name) {
      /*$this->$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      try {
        $this->$db->beginTransaction();*/
        $insertDance = $this->db->prepare("INSERT INTO clase(nombre) VALUES(?)");
        $insertDance->execute(array($name));
        $this->$db->commit();
      /*} catch(PDOException $ex) {
        $this->$db->rollBack();
        log($ex->getMessage());
      }*/
    }

    function getStudentsByDance() {
      $studentList = [];
      $select = $this->db->prepare("SELECT inscripto.rowId, clase.id as 'claseId', clase.nombre as 'claseNombre', alumno.id as 'alumnoId', alumno.nombre as 'alumnoNombre', alumno.email as 'alumnoEmail' FROM inscripto INNER JOIN alumno ON alumno.id = inscripto.id_alumno INNER JOIN clase ON clase.id = inscripto.id_clase");
      $select->execute();
      $students = $select->fetchAll(PDO::FETCH_ASSOC);
      foreach ($students as $student) {
        $studentList[] = $student;
      }
      return $studentList;
    }

    function addStudentByDance($danceId, $nameStudent, $emailStudent) {
      $this->$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      try {
        $this->$db->beginTransaction();
        $insertStudent = $this->db->prepare("INSERT INTO alumno(nombre, email) VALUES(?,?)");
        $insertStudent->execute(array($nameStudent,$emailStudent));
        $fk_student = $this->db->lastInsertId();
        $signIn = $this->db->prepare("INSERT INTO inscripto(id_alumno, id_clase) VALUES(?,?)");
        $signIn->execute(array($fk_student,$danceId));
        $this->$db->commit();
      } catch(PDOException $ex) {
        $this->$db->rollBack();
        log($ex->getMessage());
      }
    }

    function getTeachers() {
      $teacherList = [];
      $select = $this->db->prepare("select * from profesor");
      $select->execute();
      $profes = $select->fetchAll(PDO::FETCH_ASSOC);
      foreach ($profes as $profe) {
        $teacherList[] = $profe;
      }
      return $teacherList;
    }

    function getStudents() {
      $studentsList = [];
      $select = $this->db->prepare("select * from alumno");
      $select->execute();
      $alumnos = $select->fetchAll(PDO::FETCH_ASSOC);
      foreach ($alumnos as $alumno) {
        $studentsList[] = $alumno;
      }
      return $studentsList;
    }

    function unsubscribe($row){
      /*$this->$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      try {
        $this->$db->beginTransaction();*/
        $delete = $this->db->prepare("DELETE FROM inscripto WHERE rowId=?");
        $delete->execute(array($row));
        $this->$db->commit();
      /*} catch(PDOException $ex) {
        $this->$db->rollBack();
        log($ex->getMessage());
      }*/
    }

    function assign_dance_teacher($danza,$profe){
      /*$this->$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      try {
        $this->$db->beginTransaction();*/
        $update = $this->db->prepare("UPDATE FROM inscripto WHERE rowId=?");
        $update->execute(array($row));
        $this->$db->commit();
      /*} catch(PDOException $ex) {
        $this->$db->rollBack();
        log($ex->getMessage());
      }*/
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
