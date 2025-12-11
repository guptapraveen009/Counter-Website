let head = document.getElementById("h-count");
let counter = document.getElementById("count");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");

let count = 0;
increase.onclick = function(){
    count++;
    counter.textContent = count;
}

decrease.onclick = function(){
    if(count === 0){
        counter.textContent = 0;
    }
    else{
        count--;
        counter.textContent = count;
    }
}

reset.onclick = function (){
    count = 0;
    counter.textContent = count;
    alert("Your Count Has Been Reseted");
}