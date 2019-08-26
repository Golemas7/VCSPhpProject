<?php
  define("DB_SERVER", "localhost");
  define("DB_USER", "root");  
  define("DB_PASSWORD", "");  
  define("DB_NAME", "finalprojectdb");

  $mysqli = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME);
  if($mysqli -> connect_error){
    echo "Atsiprasome";
    echo 'Klaida: ' . $mysqli -> connect_error;
    exit();
  }
 mysqli_query($mysqli,"INSERT INTO users (fname, lname, email, message)
 VALUES('$_POST[fname]','$_POST[lname]','$_POST[email]','$_POST[message]')");
?>
  
