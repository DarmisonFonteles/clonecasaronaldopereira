const divs = document.getElementById("sobre");
const div = document.querySelectorAll("#sobre sobre");
$('#sobre');


let sm = 0;

function carrossel(){
    sm++;

    if(sm > divs.length - 1){
        sm = 0;
    }
    divs.style.transform = `translateX($(-sm * 500)px)`;
}

setInterval(carrossel, 1800);