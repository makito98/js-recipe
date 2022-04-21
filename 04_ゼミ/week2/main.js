const memoinput = document.getElementById("memo-input")
const addbutton = document.getElementById("add-button")
const memocontainer = document.getElementById("memo-container")

addbutton.onclick = function () {
  const text = memoinput.value

  list.push(text)
  localStorage.list = JSON.stringify(list)

  const container = document.createElement("div")
  memocontainer.className = "container"
  container.textContent = text
  memocontainer.append(container)
}

let list = []

if (localStorage.list) {
  // 状態の更新 list: [] -> ["こんにちは"]
  list = JSON.parse(localStorage.list)

  // 状態の変化を画面に表示する
  for (const text of list) {
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text
    memocontainer.append(card)
  }
}
