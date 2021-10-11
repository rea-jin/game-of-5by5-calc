<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>５マス計算</title>
    <link rel="stylesheet" href="style.css">
    <!-- <link rel="stylesheet" href="style2.css"> -->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="app.js"></script>
</head>

<body>
    <div class="button__area">
        <p>行数を選んでください
            <select id="row" name="row">
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
        </p>
        <p>列数を選んでください
            <select id="col" name="col">
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
        </p>
        
        <button id="enzan">演算子変更</button>
        <button id="start">start</button>
        <button id="saiten">採点</button>
        <!-- <button id="get">入力値取得</button> -->
        <p>引き算は、上の数字から横の数字を引いてください。</p>
        <p>割り算は、上の数字を下の数字で割ってください。<br>
            割り算の時、答えは少数第２位を四捨五入して、<br>
            少数第１位まで記入してください。</p>
    </div>


    <div class="output">
        <!-- 演算子表示 -->
        <input id="kigou" class="kigou" type="button" name="" value="+">
        <!-- １行目５個 -->
        <!-- <input id="j_1" class="row-i" type="button" value="7"> -->
        <!-- 1列め５個 -->
        <!-- <input id="j_1" class="col-j" type="button" value="7"> -->
        <div class="input__area">
            <!-- マス２５個 -->
            <!-- <input id="k_1" class="mas-k" type="text"> -->
        </div>

    </div>

    <div class="output-2">
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>



</body>

</html>