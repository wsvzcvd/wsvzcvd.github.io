//宣告
let storagePrice = 0;
let totalPrice = 0;
let wifiPrice = 0;


//方法
function calTotalPrice() {
    totalPrice = storagePrice + wifiPrice
    priceText()
}
function priceText() {
    let text = document.querySelector(".total h2");
    text.textContent = "$" + totalPrice;
}

//window.onload
window.onload = function () {
    //點選顏色更改圖片
    let color = document.querySelectorAll(".color");
    color.forEach(x => {
        x.addEventListener('click', function () {
            let img = this.getAttribute('id');
            document.querySelector('#main-pic').src = img
        })
    })
    //點選後取得容量價格
    let storage = document.querySelectorAll(".storage .btns");
    storage.forEach(x => {
        x.addEventListener('click', function () {
            storagePrice = parseInt(this.getAttribute('id'))
            calTotalPrice()
        })
    })
    //點選後取的wifi容量價格
    let wifi = document.querySelectorAll(".wifi .btn");
    wifi.forEach(x =>{
        x.addEventListener('click', function(){
            wifiPrice = parseInt(this.getAttribute('id'))
            calTotalPrice()
        })
    })
}
