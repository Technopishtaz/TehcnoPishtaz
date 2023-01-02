<?php

    $db = mysqli_connect("localhost", "root", "", "sardarandb");

    if (isset($_POST['login_btn'])) {
        $username = mysqli_real_escape_string($db, $_POST['username']);
        $password = mysqli_real_escape_string($db, $_POST['password']);
    	$sql = "SELECT * FROM admin_user WHERE username='$username' AND password='$password'";
        $password = md5($password);
    	$result = mysqli_query($db, $sql);

    	if (mysqli_num_rows($result) == 1) {
            echo "True";
            } else {
    		$_SESSION['message'] = "نام کاربری یا گزرواژه نادرست است";
            echo "<style>.admin_logo{display:none;}</style>";
        }
    }

?>

<!DOCTYPE html>
<html lang="fa-IR">
    <head>
        <title>پنل ورود مدیر</title>
        <link rel="icon" type="image/png" href="contents/imgs/logo.svg"/>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="contents/css/loginpanel.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="lib/jquery.js"></script>
    </head>
    <body style="direction: rtl;">

    <div class="hero" id="ex1">
        <div class="from-box" id="ex1-layer">
            
			<?php
				if (isset($_SESSION['message'])) {
                    echo "<div id='pop' class='pop' onclick='popUp();'></div>";
					echo "<div id='error_msg' class='error_msg'>".$_SESSION['message']."</div>";
					unset($_SESSION['message']);
				}
			?>
            
            <form id="login" class="inputs" method="post" action="login.php">
                <input id="user" type="text" name="username" class="input-fields" placeholder="نام کاربری" required><img src="contents/imgs/user.png" alt="user" class="icon user"><div class="line"></div>
                <div class="input-shadow first"></div>
                
				<input id="pass" type="password" name="password" class="input-fields2" placeholder="رمز عبور" required><img src="contents/imgs/pass.png" alt="user" class="icon pass"><div class="line2"></div>
                <div class="input-shadow second"></div>
                
				<button type="submit" name="login_btn" class="submit-btn">ورود</button>
				<button type="button" class="back-btn" onclick="location.href='main.html';">بازگشت</button>

                <img src="contents/imgs/admin_logo.png" alt="Admin Logo" class="admin_logo">
                <div class="shadow"></div>
                
			</form>
            

		</div>
	</div>

    </body>
</html>

<script src="contents/js/javascript.js"></script>
<script>
    document.getElementById("user").autocomplete = "off";
	document.getElementById("pass").autocomplete = "off";
    
    function popUp() {
        var popup = document.getElementById("pop");
        var error = document.getElementById("error_msg");
        var logo = document.getElementsByClassName("admin_logo")[0];
        popup.style.display = "none";
        error.style.display = "none";
        logo.style.display = "block";
    }
</script>