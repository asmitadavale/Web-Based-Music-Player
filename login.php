<?php
session_start();
include('db_connect.php');

if (isset($_POST['user_name'])) {
   $user_name = $_POST['user_name'];
   $user_password = $_POST['user_password'];

   $query = "SELECT * FROM user WHERE user = '$user_name' AND password = '$user_password' LIMIT 1";
   $result = mysqli_query($con, $query);

   if (mysqli_num_rows($result) == 1) {
       header('Location: welcome.php');
       exit;
   } else {
       $msg = "Incorrect Password"; 
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
    <title>AD Music Player Login</title>
</head>
<body>
    <header>
        <div class="left_bx1">
        <div class="content">
            <form method="post">
               <h3>Login</h3>
               <div class="card">
                <label for="name">Name</label>
                <input type="text" name="user_name" placeholder="Enter Your UserName....." required>
               </div>

               <div class="card">
                <label for="password">Password</label>
                <input type="password" name="user_password" placeholder="User Password" required>
               </div>
               <input type="submit" value="Login" class="submit">
               <div class="check">
                <input type="checkbox" name="" id=""><span>Remember Me.</span>
               </div>
               <p>Don't have a accont yet? <a href="singup.php">Singup Up</a></p>
            </form>
        </div>
        </div>

        <div class="right_bx2">
            <img src="image\Login.png" alt="">
            <!-- <h3>Inccorect Password</h3> -->
             <?php
             echo ('<h3>'.$smg.'</h3>')
             ?>
        </div>
    </header>
</body>
</html>