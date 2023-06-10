let colors = ["yellow", "green", "red"];
let index = 0;
let btn = document.getElementById("btn");

setInterval(changeColor, 10000);

function changeColor() { 
    btn.style.backgroundColor = colors[index];
    ++index;
    if(index == 3)
        index = 0;
}