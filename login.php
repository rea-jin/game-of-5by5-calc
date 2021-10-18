<?php
// db上のデータ
// user name を配列に入れる。dbがないので。
$user_name = ['admin','test','test2'];
// 配列の長さ
$data = count($user_name);

// password
$user_password = 'password';

// 入力値
$name = $_POST["name"];
$password = $_POST["pass"];

// userNameと入力されたユーザー名を比べる
for($i=0; $i<$data; $i++){
    if($user_name[$i] === $name){
        $match = true;
        break;
    } else {
        $match = false;
    }

}

// name, pass があっている時
if($match && $user_password === $password) {
    // json_encode(array());
    echo json_encode(["msg" => "ログインしました", "url" => "/5calc/calc.php"]);
    
}elseif(!$match || $user_password !== $password) {
    echo json_encode(["msg" => "なまえかパスワードが違います", "url" => "/5calc/index.php"]);

}else{
    echo json_encode(["msg" => "not match name and password"]);
}


