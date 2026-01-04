let countVal = document.getElementById("count");
let entires = document.getElementById("save")

let count = 0;

function increment(){
    count = count + 1;
    countVal.textContent = count
}

function save(){
    let countStr = count + " - "
    entires.textContent += countStr
    count = 0
    countVal.textContent = count
}