/*when movePlayer() works do newPosition=newPosition+rollTheDice (create return)

rollTheDice= () => {
    let diceNumber = Math.round(Math.random()*5)+1
    console.log(diceNumber);
}*/
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

document.getElementById("button").addEventListener("click", function movePlayer() {
    oldPosition = newPosition;
    newPosition++;
    document.getElementById(boardArray[oldPosition]).removeChild(/*what to write here*/);
    document.getElementById(boardArray[newPosition]).appendChild(/*what to write*/)
  });