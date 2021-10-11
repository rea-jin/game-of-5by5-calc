$(function () {
  // ランダム数字をセット

  const row = 5; // 行
  const col = 5; // 列
  const mas = row * col;
  var array = []; // 全ての答えを順番に入れる

  // ===========================================
  // startボタンを押したら 
  // ===========================================
  $("#start").on("click", function () {
    // 列、行を削除する
    $(".row-i").remove();
    $(".col-j").remove();
    $(".mas-k").remove();
    // ランダム数字を作成
    // 10こ必要なので、１０回繰り返す
    // １列目の５行分を作成 数字５つ
    for (let i = 1; i <= row; i++) {
      // 1~10まで。実数に変更
      var num1 = Math.floor(Math.random() * 10 + 1);

      // inputタグにクラス+iを挿入
      $(".output").append(
        $("<input>").attr({
          id: "i_" + i,
          class: "row-i",
          type: "button",
          value: num1,
        })
      );
    }
    // １行目の５列分の数字を作成
    for (let j = 1; j <= col; j++) {
      // 1~10まで。実数に変更
      var num2 = Math.floor(Math.random() * 10 + 1);

      // inputタグにクラス+iを挿入
      $(".output").append(
        $("<input>").attr({
          id: "j_" + j,
          class: "col-j",
          type: "button",
          value: num2,
        })
      );
    }

    // 入力用のマスを作成
    for (let k = 1; k <= mas; k++) {
      $(".input__area").append(
        $("<input>").attr({
          id: "k_" + k,
          class: "mas-k",
          type: "text",
          // value: "0",
        })
      );
    }
    // });

    // saitenボタンを押したら // 演算子選択ボタンを押したら、// kigouを取得
    // $("#saiten").on("click", function () {
    var kigou = $("#kigou").val();
    var kigou_array = ["+", "-", "*", "/"];
    // $("#enzan").on('click',function(){
    // ランダムで記号を選ぶ

    let index = Math.floor(Math.random() * kigou_array.length);
    kigou = kigou_array[index];
    console.log(kigou);
    $("#kigou").val(kigou);
    // })

    // 1行目から順番に計算していく
    // 1行目の計算は、id:col-1は固定,row-1,row-2....
    // 列分ループ col

    // 配列を空にする
    array = [];
    for (let n = 1; n <= col; n++) {
      // row-i行の数字をidから数字を取得
      var col_num = $('#j_' + n).val(); //  ...... これができないなら、最初に配列に入れておく
      // console.log(col_num);
      // j１行に対して、列の数字を足していく
      for (let m = 1; m <= row; m++) {
        // col-j列の数字を取得
        var row_num = $('#i_' + m).val();
        // console.log(row_num);

        // 行の数字と列の数字をたす
        var ans = row_num + kigou + col_num;
        ans = eval(ans);
        // 割り算の場合、四捨五入する
        if(kigou =="/"){
          ans = Math.round(ans*10)/10;
        }
        console.log(ans);
        // p = n*m - 1; // キー
        array.push(ans); // 配列に入れる
      }
    }
  });

  // startボタンを押したら ・・・・・・・ここまで
  // ===========================================


  // フォーカスが外れたら =======================

  $(document).on('focusout', '.mas-k', function () {
    // $("input[type='text']").on("input", function () {
    // 入力された値を取得
    var input = $(this).val(); // ....input
    // 全角の場合、半角数字に直して表示
    input = input.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 65248);
        });
        $(this).val(input);

    console.log("input:" + input);

    // inputが空欄でなければ、
    if (input !== "") {
      // idを取得して、k-1,k-2....
      var mas_num = $(this).attr("id");
      console.log(mas_num);
      // 文字を切り取る 2文字目から全てを指定
      var k_num = mas_num.substr(2);
      console.log(k_num);
      // その数字のマスから答えを取得
      var key = k_num - 1;
      result = array[key]; // .....answer
      // console.log(array[0]);
      console.log("result:" + result);

      // 答えを比較
      if (input == result) {
        // 正解なら背景を緑
        $(this).css("background-color", "green");
      } else {
        // 不正解なら背景を赤
        $(this).css("background-color", "red");
      }
    }

  });
});