var count = 0;
var min = 0;
var sec = 0;
var stp = null;
var i = 0;
//  var stp = setInterval(countUp, 1000);
// カウントアップスタート、ストップ
function countStart() {



  // $("#start").on('click', function count_start() {
  i++;
  if (i === 1) {
    // カウントアップ関数呼び出し、コールバック、１秒ごと
    stp = setInterval(countUp, 1000);
    console.log("timer start");
  } else {
    // disableにしたので、たぶんならない
    alert("2度押し厳禁！");
    i = 0;
  }
};

// カウントアップ関数
function countUp() {


  // １０分で終了させる
  if (count === 599) {
    $("#timer").text() = "Time UP!";
    clearInterval(stp);
  } else {
    count++;
    console.log(count);
    min = parseInt(count / 60);
    sec = count % 60;
    $("#timer").text(("0" + min).slice(-2) + "：" + ("0" + sec).slice(-2));
  }
};