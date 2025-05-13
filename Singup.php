<?php
session_start();

include('db_connect.php');

$msg = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_name = $_POST['user_name'];
    $user_email = $_POST['user_email'];
    $user_password = $_POST['user_password'];
    $user_re_password = $_POST['user_re_password'];

    if (!empty($user_name) && !empty($user_email) && !empty($user_password) && !empty($user_re_password)) {
        if ($user_password === $user_re_password) {
            $query = "INSERT INTO user (user, email, password) VALUES ('$user_name', '$user_email', '$user_password')";
            mysqli_query($con, $query);
            header("Location: login.php");
            exit;
        } else {
            // $msg = "Passwords not match.";
        }
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="image/logo.jpg" type="image/png">
    <title>AD Music Player Sign Up</title>
</head>
<body>
    <header>
        <div class="left_bx1">
        <div class="content">
        <form method="post">
   <h3>SignUp</h3>
   <div class="card">
    <label for="name">Name</label>
    <input type="text" name="user_name" placeholder="Enter Your UserName....." required>
   </div>

   <div class="card">
    <label for="email">E-Mail</label>
    <input type="email" name="user_email" placeholder="Enter User E-Mail...." required>
   </div>
    
   <div class="card">
    <label for="password">Password</label>
    <input type="password" name="user_password" placeholder="Enter Your Password...." required>
   </div>

   <div class="card">
    <label for="re_password">Re-Password</label>
    <input type="password" name="user_re_password" placeholder="Enter User Re-Password...." required>
   </div>

   <?php
   if ($msg) {
       echo('<h3 style="color:red; text-align:center;">'.$msg.'</h3>');
   }
   ?>

   <input type="submit" value="Sign Up" class="submit">
   <div class="check">
    <input type="checkbox" name="" id=""><span>Remember Me.</span>
   </div>
   <p>Already have an account? <a href="login.php">Login</a></p>
</form>

        </div>
        </div>


        <div class="right_bx2">
            <img src="image\Login.png" alt="">
            <!-- <h3>Inccorect Password</h3> -->
            
        </div>
    </header>
</body>
</html>