rollTheDice= () => {
    return diceNumber = Math.round(Math.random()*5)+1;
}

let boardArray = [
    "box-1",
    "box-2",
    "box-3",
    "box-4",
    "box-5",
    "box-6",
    "box-7",
    "box-8",
    "box-9",
    "box-10"
]
let oldPosition =0
let newPosition =0

document.getElementById("button").addEventListener("click", function(){
    oldPosition = newPosition;
    newPosition=newPosition+rollTheDice();
    document.getElementById(boardArray[newPosition]).appendChild(document.getElementById("player-one"));
    document.getElementById(boardArray[oldPosition]).removeChild(document.getElementById("player-one"));
    });