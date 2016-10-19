<?php

  class ConfigApp {
    public static $ACTION = 'action';

    // mostrar páginas
    public static $ACTION_HOME = 'home';
    public static $ACTION_DANCE = 'dance';
    public static $ACTION_REGISTER = 'register';
    public static $ACTION_SIGN_UP = 'inscripcion';
    public static $ACTION_CONTACT_US = 'contact_us';

    // altas
    public static $ACTION_DANCE_ADD = 'add_dance'; // agrega una clase
    public static $ACTION_REGISTER_ADD_PERSON = 'add_person'; // agrega un profesor/alumno
    public static $ACTION_SIGN_UP_SUBSCRIBE = 'subscribe'; // agrega un alumno a una clase

    // bajas
    public static $ACTION_SIGN_UP_UNSUBSCRIBE = 'unsubscribe'; // elimina la inscripcion de un alumno a una clase
    public static $ACTION_DANCE_DELETE = 'delete_Dance'; // elimina una clase

    // updates
    public static $ACTION_REGISTER_ASSIGN_DANCE_TEACHER = 'assign_dance_teacher';

  }

?>
