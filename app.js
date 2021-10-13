$(function () {
  // ランダム数字をセット

  var row = 5; // 行
  var col = 5; // 列
  var mas = row * col; // マス
  var kigou = $("#kigou").val(); // 演算子
  var array = []; // 全ての答えを順番に入れる配列


  // 選択した列と行を取得
  $("#row").on('change', function () {
    row = $(this).val();
    mas = row * col;
    console.log(mas);
  });
  $("#col").on('change', function () {
    col = $(this).val();
    mas = row * col;
    console.log(mas);
  });

  // ===============================================
  // 演算子変更ボタンを押したら記号を変える 
  // =============================================== 
  $("#enzan").on('click', function () {
    var kigou_array = ["+", "-", "*", "/"];

    // ランダムで記号を選ぶ
    let index = Math.floor(Math.random() * kigou_array.length);
    kigou = kigou_array[index];
    console.log(kigou);
    $("#kigou").val(kigou);
  });


  // ===========================================
  // startボタンを押したら タイマースタート
  // ===========================================
  $("#start").on("click", function () {
    // 列、行を削除する
    $(".row-i").remove();
    $(".col-j").remove();
    $(".mas-k").remove();

    // 演算子ボタンを押せないようにする
    $("#enzan").attr("disabled", true);
    // このボタンも押せないようにする 
    $("#start").attr("disabled", true);

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
      // もし、行数番目になったら、フロート解除
      if (i == row) {
        $("#i_" + i).css("float", "none");
        console.log(i + "番目")
      }

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
      // もし、行数で割り切れるとき、フロート解除
      if ((k % row) == 0) {
        $("#k_" + k).css("float", "none");
        console.log(k + "番目")
      }
    }

    // タイマースタートの関数を呼び出す
    countStart();
  });

  // ===========================================
  // フォーカスが外れたら、全角を半角に直す
  // ===========================================
  $(document).on('focusout', '.mas-k', function () {
    // $("input[type='text']").on("input", function () {
    // 入力された値を取得
    var input = $(this).val(); // ....input
    // 全角の場合、半角数字に直して表示
    input = input.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 65248);
    });
    $(this).val(input);

    console.log("input:" + input);
  });

  // =========================================
  // 採点ボタンを押したら タイマーストップ　採点する
  // =========================================
  $("#saiten").on("click", function () {
    // 演算子ボタンを有効にする
    $("#enzan").attr("disabled", false);
    // startボタンも有効にする
    $("#start").attr("disabled", false);
    // タイマーを止める
    clearInterval(stp);

    // 1行目から順番に計算していく
    // 1行目の計算は、id:col-1は固定,row-1,row-2....

    // 配列を空にする・・・前回の答えを消す
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
        if (kigou == "/") {
          ans = Math.round(ans * 10) / 10;
        }
        console.log(ans);
        // p = n*m - 1; // キー
        array.push(ans); // 配列に入れる
      }
    }

    // 入力値を配列に入れる
    var input_array = [];
    // それぞれのinput type:textについて、値を取得して配列に入れる
    $("input[type=text]").each(function () {
      var input_ans = $(this).val();
      input_array.push(input_ans);

    });

    // 配列の値を順番に比べていく
    for (let p = 0; p < mas; p++) {
      var ans = array[p];
      var inp = input_array[p];

      // idを取得
      k = p + 1;
      // 答えを比較
      if (inp == ans) {
        // 正解なら背景を緑
        $("#k_" + k).css("background-color", "green");
      } else {
        // 不正解なら背景を赤
        $("#k_" + k).css("background-color", "red");
      }
    }
  });
 






});



