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

    public function copyImage($image){
      $path = 'img/'.$image["name"];
      copy($image["tmp_name"], $path);
      return $path;
    }

    function addDance($name,$info,$image) {
      /*$this->$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      try {
        $this->$db->beginTransaction();*/
          $path_image =  $this->copyImage($image);
          $insertDance = $this->db->prepare("INSERT INTO clase(nombre,informacion,imagen) VALUES(?,?,?)");
          $insertDance->execute(array($name,$info,$path_image));
          $this->$db->commit();
      /*} catch(PDOException $ex) {
        $this->$db->rollBack();
        log($ex->getMessage());
      }*/
    }

    function deleteDance($idDance){
      /*$this->$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      try {
        $this->$db->beginTransaction();*/
        $delete = $this->db->prepare("DELETE FROM clase WHERE id=?");
        $delete->execute(array($idDance));
        $this->$db->commit();
      /*} catch(PDOException $ex) {
        $this->$db->rollBack();
        log($ex->getMessage());
      }*/
    }

    function deleteAlumno($id){
      /*$this->$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      try {
        $this->$db->beginTransaction();*/
        $delete = $this->db->prepare("DELETE FROM alumno WHERE id=?");
        $delete->execute(array($id));
        $this->$db->commit();
      /*} catch(PDOException $ex) {
        $this->$db->rollBack();
        log($ex->getMessage());
      }*/
    }

    function deleteProfesor($id){
      /*$this->$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      try {
        $this->$db->beginTransaction();*/
        $delete = $this->db->prepare("DELETE FROM profesor WHERE id=?");
        $delete->execute(array($id));
        $this->$db->commit();
      /*} catch(PDOException $ex) {
        $this->$db->rollBack();
        log($ex->getMessage());
      }*/
    }

    function getDanceById($idDance) {
      $danceList = [];
      $select = $this->db->prepare("SELECT * FROM clase WHERE id = ?");
      $select->execute(array($idDance));
      $dances = $select->fetchAll(PDO::FETCH_ASSOC);
      foreach ($dances as $dance) {
        $danceList[] = $dance;
      }
      return $danceList;
    }

    function getTeacherByDance($idDance) {
      $teacherList = [];
      $select = $this->db->prepare("SELECT profesor.* FROM profesor INNER JOIN clase ON clase.id_profesor = profesor.id and clase.id = ?");
      $select->execute(array($idDance));
      $teachers = $select->fetchAll(PDO::FETCH_ASSOC);
      foreach ($teachers as $teacher) {
        $teacherList[] = $teacher;
      }
      return $teacherList;
    }

    function getStudentsByDance($danceId) {
      $studentList = [];
      $select = $this->db->prepare("SELECT inscripto.rowId, clase.id as 'claseId', clase.nombre as 'claseNombre', alumno.id as 'alumnoId', alumno.nombre as 'alumnoNombre', alumno.email as 'alumnoEmail' FROM inscripto INNER JOIN alumno ON alumno.id = inscripto.id_alumno INNER JOIN clase ON clase.id = inscripto.id_clase");
      $select->execute(array($danceId));
      $students = $select->fetchAll(PDO::FETCH_ASSOC);
      foreach ($students as $student) {
        $studentList[] = $student;
      }
      return $studentList;
    }

    function getInfoStudentsByDance($danceId) {
      $studentList = [];
        $select = $this->db->prepare("SELECT alumno.nombre, alumno.email, alumno.telefono FROM alumno INNER JOIN inscripto ON alumno.id = inscripto.id_alumno INNER JOIN clase ON clase.id = inscripto.id_clase WHERE clase.id = ?");
      $select->execute(array($danceId));
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

    function getStudentById($id) {
      $student;
      $select = $this->db->prepare("SELECT * FROM alumno WHERE id = ?");
      $select->execute(array($id));
      $student = $select->fetchAll(PDO::FETCH_ASSOC);
      return $student;
    }

    function getTeacherById($id) {
      $student;
      $select = $this->db->prepare("SELECT * FROM profesor WHERE id = ?");
      $select->execute(array($id));
      $student = $select->fetchAll(PDO::FETCH_ASSOC);
      return $student;
    }

    function signUp($danza,$alumno){
      /*$this->$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      try {
        $this->$db->beginTransaction();*/
        $insert = $this->db->prepare("INSERT INTO inscripto(id_clase,id_alumno) VALUES(?,?)");
        $insert->execute(array($danza,$alumno));
        $this->$db->commit();
      /*} catch(PDOException $ex) {
        $this->$db->rollBack();
        log($ex->getMessage());
      }*/
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

    function addPerson($tabla,$nombre,$email,$tel){
      /*$this->$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      try {
        $this->$db->beginTransaction();*/
        if ($tabla == 'alumno')
          $insert = $this->db->prepare("INSERT INTO alumno(nombre,email,telefono) VALUES (?,?,?)");
        elseif ($tabla == 'profesor') {
          $insert = $this->db->prepare("INSERT INTO profesor(nombre,email,telefono) VALUES (?,?,?)");
        }
        $insert->execute(array($nombre,$email,$tel));
        $this->$db->commit();
      /*} catch(PDOException $ex) {
        $this->$db->rollBack();
        log($ex->getMessage());
      }*/
    }

    function updatePerson($tipoTabla,$id,$nombre,$email,$tel){
      /*$this->$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      try {
        $this->$db->beginTransaction();*/
        if ($tipoTabla == 'A')
          $update = $this->db->prepare("UPDATE alumno SET nombre = ?, email = ?, telefono = ? WHERE id = ?");
        elseif ($tipoTabla == 'P') {
          $update = $this->db->prepare("UPDATE profesor SET nombre = ?, email = ?, telefono = ? WHERE id = ?");
        }
        $update->execute(array($nombre,$email,$tel,$id));
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
        $update = $this->db->prepare("UPDATE clase SET id_profesor = ? WHERE id = ?");
        $update->execute(array($profe,$danza));
        $this->$db->commit();
      /*} catch(PDOException $ex) {
        $this->$db->rollBack();
        log($ex->getMessage());
      }*/
    }

    function deallocate_dance_teacher($danza){
      /*$this->$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      try {
        $this->$db->beginTransaction();*/
        $update = $this->db->prepare("UPDATE clase SET id_profesor = NULL WHERE id = ?");
        $update->execute(array($danza));
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
