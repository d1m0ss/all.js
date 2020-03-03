var butoncenter = document.getElementById("buton__center");
var bgrall = document.getElementById("bgrund");
var btnrigt = document.getElementById("buton__left");
var btnleft = document.getElementById("buton_right");
var hid = document.getElementById("hidden");
var back = document.getElementById("back");

function gray() {
    bgrall.style.backgroundColor = "orange";
    butoncenter.style.backgroundColor = "white";
    btnrigt.style.backgroundColor = "black";
    btnleft.style.backgroundColor = "black";
}

butoncenter.addEventListener("click", clickif);    

function hidden() {
    bgrall.style.visibility = "hidden";
    hid.style.visibility = "visible";
}

btnleft.addEventListener('click', hidden);

function backhid() {
    bgrall.style.visibility = "visible";
    hid.style.visibility = "hidden";
}

back.addEventListener('click', backhid);


let i = 0;

function clickif () {
    i++;
    i = i % 2;
    if(i == 1) {
        bgrall.style.backgroundColor = "orange";
        butoncenter.style.backgroundColor = "black";
        btnrigt.style.backgroundColor = "black";
        btnleft.style.backgroundColor = "black";
        back.style.backgroundColor = "black";
    }
    else if(i == 0) {
        bgrall.style.backgroundColor = "gray";
        butoncenter.style.backgroundColor = "saddlebrown";
        btnrigt.style.backgroundColor = "saddlebrown";
        btnleft.style.backgroundColor = "saddlebrown";
        back.style.backgroundColor = "saddlebrown";
    }
}