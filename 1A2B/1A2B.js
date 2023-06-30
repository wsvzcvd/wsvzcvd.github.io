//宣告
let randow = 0
let numberstring = ""



//DOM
const start = document.querySelector('.start')
const again = document.querySelector('.again')
const QA = document.querySelector('.QA')
const input = document.querySelector('.input')
const guess = document.querySelector('.guess')
const textinput = document.querySelector('.text-input')


//方法
function getrandow() {
    numberstring = ""
    while (numberstring.length < 4) {
        let number = Math.floor(Math.random() * 10);
        if (!numberstring.includes(number)) {
            numberstring += number
        }
    }
    return numberstring
}

function guessnumber() { //判斷輸入框的判斷
    let output = input.value.trim()
    if (isNaN(output)) { //裡面的參數這個東西會轉成數字，轉成功false ,轉失敗turn
        alert(`請輸入數字`)
    }
    else if (output.length != 4) {
        alert(`請輸入4個位數的數字`)
    }
    else if (isRepeat(output)) {
        alert(`請嘗試輸入不重複的數字`)
    }
    else {
        win(output)
    }
    input.value = ""
}

function textdiv() { //創造一個P ,將數字放入p
    let p = document.createElement('p')
    p.innerText = input.value
}

function Answer() { //看答案
    alert(`答案是${numberstring}`)
}

function win(inputnum) {
    let A = 0
    let B = 0
    for (let i = 0; i < inputnum.length; i++) {
        if (inputnum[i] == numberstring[i]) {
            A++;
            console.log(A)
        }
        else if (inputnum.includes(numberstring[i])) {
            B++;
            console.log(B)
        }
    }
    if (A == numberstring.length) {
        alert(`您猜中了`)
        start.disabled = false
        again.disabled = true
        QA.disabled = true
        input.disabled = true
    }
    else {
        textinput.innerText += `${inputnum} --- ${A}A ${B}B \n`
    }
}
function isRepeat(num) {
    let numArray = num.split('');
    for (let i = 0; i < numArray.length; i++) {
        for (let j = i + 1; j < numArray.length; j++) {
            if (numArray[i] === numArray[j]) {
                return true;
            }
        }
    }
    return false;
}

function restart() {
    textinput.innerText = ""
    start.disabled = false
    again.disabled = true
    QA.disabled = true
    input.disabled = true
}

//window.onload
window.onload = function () {
    again.disabled = true
    QA.disabled = true
    input.disabled = true


    start.onclick = function () {
        randow = getrandow()
        again.disabled = false
        QA.disabled = false
        input.disabled = false
        start.disabled = true
    }
    QA.addEventListener('click', Answer)
    guess.addEventListener('click', guessnumber)
    again.addEventListener('click', restart)
}

