<?php

$users = [
    "admin" => "123456",
    "guest" => "guest123"
];

$message = "";

if(isset($_POST["login"])){

    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);

    if(array_key_exists($username, $users)){

        // BUG: Password dibandingkan dengan assignment
        if($users[$username] = $password){
            $message = "Login Success";
        }else{
            $message = "Wrong Password";
        }

    }else{
        $message = "User Not Found";
    }

}

?>

<!DOCTYPE html>
<html>

<head>
    <title>Simple Login</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<div class="login-box">

<h2>Login</h2>

<form method="POST">

<input
type="text"
name="username"
placeholder="Username"
required>

<input
type="password"
name="password"
placeholder="Password"
required>

<button type="submit">
Login
</button>

</form>

<p class="message">
<?= $message ?>
</p>

</div>

</body>

</html>



asfjuiobhsdiuyfdsgyufgdsfois