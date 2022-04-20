// button 要素と click イベント
// イベントが発生する要素を取得する
const button = document.getElementById("button")

// button 要素と click イベント
const alertMessage = function () {
  alert("クリックしたね")
}

button.onmouseover = alertMessage

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

document.onkeydown = function (e) {
  console.log(e.key)
}

inputText.oninput = onkeydown
inputDate.oninput = onkeydown

document.onkeydown = function (e) {
  console.log(e.key)
}
