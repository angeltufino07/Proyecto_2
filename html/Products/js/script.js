var slideIndex = 0;
carousel();

function carousel(){
    var i;
    var x = document.getElementsByClassName("slide");
    for(i = 0; i< x.length; i++){
        x[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > x.length){
        slideIndex = 1;
    }
    x[slideIndex - 1].style.display = "block";
    currentDiv(slideIndex);
    setTimeout(carousel, 5000);
}

function currentDiv(n){
    showDivs(slideIndex = n);
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("slide");
    var control = document.getElementsByClassName("controle");
    if(n > x.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = x.length;
    }
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    for(i = 0; i < control.length; i++){
        control[i].className = control[i].className.replace(" controlActive"," controlInactive");
    }
    x[slideIndex-1].style.display = "block";
    control[slideIndex-1].className = control[slideIndex-1].className.replace(" controlInactive"," controlActive");
}

window.onload = function (){
    document.body.className += "loaded";
}