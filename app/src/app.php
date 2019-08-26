<?php
  if(isset($_POST['submit'])){
    $vardas = trim($_POST['fname']);
    $pavarde = trim($_POST['lname']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

    if(!empty($vardas) && !empty($pavarde) && !empty($email) && !empty($message)){
      if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $from = "$email";
        $to = "justas.svelnia@gmail.com";
        $subject = "Nauja zinute";
        $autorius = 'Nuo: ' . $vardas . ',' . $pavarde . ',' . $email;
        $zinute = htmlspecialchars($message);
        mail($to, $subject, $autorius, $zinute, $from);
        echo "<script>alert('Dekojame. Jusu zinute gauta. Netrukus susisieksime.');</script>";
      }
    }
      include('db.php');
  }
