var text = document.querySelector('.text');
var percent = document.querySelector('.percent');
var progress = document.querySelector('.progress');
var count = 4;
var per = 16;
var loading = setInterval(animate, 50);


function animate(){
  if(count == 100 && per == 400){
    text.textContent = "Completed";
    text.style.fontSize = "70px";
    text.classList.add("add");
    clearInterval(loading);
    per = per + 4;
    count = count + 1;
    window.location='QR.html';
  }else{
    per = per + 4;
    count = count + 1;
    progress.style.width = per + 'px';
    percent.textContent = count + '%';
  }
}
let popup = document.getElementById("popup");

    function openPopup(){
        popup.classList.add("open-popup");
    }
    function closePopup(){
        popup.classList.remove("open-popup");
    }
let pic = document.getElementById("pic");

    function closePic(){
        pic.classList.add("close-pic");
    }

    let dic = document.getElementById("dic");

    function toy(){
      document.getElementById("output").innerHTML =
      Math.floor(Math.random() * 6) + 1;
    }

