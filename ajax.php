<?php
// db上のデータ
$user_name = 'admin';
$user_password = 'password';
// 入力値
$name = $_POST["name"];
$password = $_POST["pass"];


// name, pass があっている時
if($name === $user_name && $user_password === $password) {
    // json_encode(array());
    echo json_encode(["msg" => "ログインしました", "url" => "/5calc/calc.php"]);
    
}elseif($name !== $user_name || $user_password !== $password) {
    echo json_encode(["msg" => "なまえかパスワードが違います", "url" => "/5calc/index.php"]);

}else{
    echo json_encode(["msg" => "not match name and password"]);
}


