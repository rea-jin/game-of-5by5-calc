<?php
    session_start();

    // var_dump($_SESSION);

    ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style2.css">
</head>
<body>
<section>
    <h1>マス計算ゲーム</h1>
    <div>
        <p>ログインしてください</p>
        <form id="form" action="" method="POST">
            <label for="name">なまえ
                </label>
                <input id="name" type="text" value="" name="name" placeholder="name">
            <br>
    <label for="pass">パスワード
        </label>
        <input id="pass" type="text" value="" name="pass" placeholder="password">
            <input type="submit" value="ログイン">
        </form>
    </div>
    <div id="">
        <!-- メッセージ出力 -->
        <p>メッセージ</p>
        <!-- <p><input id="response" type="text" value=""></p> -->
        <textarea name="" id="msg" cols="30" rows="10"></textarea>
    </div>
</section>


<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<script>
$(function(){
    $("#form").on("submit", function(e){
        e.preventDefault();
        $.ajax({
            type:"post",
            url:"login.php",
            dataType:"json",
            data:{
                name: $("#name").val(),
                pass: $("#pass").val()
            }
        }).done(function(json_data){
            if(json_data.length !== 0){
                 var msg = json_data["msg"];
                 var url = json_data["url"];
                 alert(msg);
                 window.location.href = url; 
                 console.log(msg);
            }else{
                var msg = "エラーが起こりました。";
                window.location.href = "/5calc/index.php";
                alert(msg);
                
            }
        })
    });
});
// when - done - fail : 先に実行したい処理-後に実行したい処理-エラーの時の処理
// doneのなかには、try - catch を書くべき
// then - catch : こっちのほうがいい
// success - error - complete は非推奨になった jquery 1.8以降
// done - fail - always になった

</script>
</body>
</html>