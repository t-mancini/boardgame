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
/*MAKE THIS WORK WITH THE NEW OBJECT. LOGIC TO CHANGE THE DICE THROUGH PLAYER.*/
document.getElementById("button").addEventListener("click", function(){
    oldPosition = newPosition;
    newPosition=newPosition+rollTheDice();
    document.getElementById(boardArray[newPosition]).appendChild(document.getElementById("player-one"));
    document.getElementById(boardArray[oldPosition]).removeChild(document.getElementById("player-one"));
    });

const players = {
    player1: {
        id: "player-one",
        class: "player",
        oldPosition: 0,
        newPosition:0,
        color:"red"},
    player2: {
        id: "player-two",
        class: "player",
        oldPosition: 0,
        newPosition:0,
        color:"blue"},
    player3: {
        id: "player-three",
        class: "player",
        oldPosition: 0,
        newPosition:0,
        color:"green",},
    player4: {
        id: "player-four",
        class: "player",
        oldPosition: 0,
        newPosition:0,
        color:"yellow"}
}

    /*works, i will finish it after creating the players object}*/
    /*i need to delete the create player button, to prevent multiple clicks*/
   document.getElementById("selectPlayers").addEventListener("click", function(){
    switch (document.getElementById("player-number").value) {
    case "2":
        playerOne = document.createElement("DIV");
        playerOne.setAttribute("id", players.player1.id);
        playerOne.setAttribute("class", players.player1.class);
        document.getElementById(boardArray[0]).appendChild(playerOne);
        document.getElementById("player-one").style.backgroundColor = players.player1.color

        playerTwo = document.createElement("DIV");
        playerTwo.setAttribute("id", players.player2.id);
        playerTwo.setAttribute("class", players.player2.class);
        document.getElementById(boardArray[0]).appendChild(playerTwo);
        document.getElementById("player-two").style.backgroundColor = players.player2.color
    break;
  case "3":
    playerOne = document.createElement("DIV");
    playerOne.setAttribute("id", players.player1.id);
    playerOne.setAttribute("class", players.player1.class);
    document.getElementById(boardArray[0]).appendChild(playerOne);
    document.getElementById("player-one").style.backgroundColor = players.player1.color

    playerTwo = document.createElement("DIV");
    playerTwo.setAttribute("id", players.player2.id);
    playerTwo.setAttribute("class", players.player2.class);
    document.getElementById(boardArray[0]).appendChild(playerTwo);
    document.getElementById("player-two").style.backgroundColor = players.player2.color

    playerThree = document.createElement("DIV");
    playerThree.setAttribute("id", players.player3.id);
    playerThree.setAttribute("class", players.player3.class);
    document.getElementById(boardArray[0]).appendChild(playerThree);
    document.getElementById("player-three").style.backgroundColor = players.player3.color
    break;
  case "4":
    playerOne = document.createElement("DIV");
    playerOne.setAttribute("id", players.player1.id);
    playerOne.setAttribute("class", players.player1.class);
    document.getElementById(boardArray[0]).appendChild(playerOne);
    document.getElementById("player-one").style.backgroundColor = players.player1.color

    playerTwo = document.createElement("DIV");
    playerTwo.setAttribute("id", players.player2.id);
    playerTwo.setAttribute("class", players.player2.class);
    document.getElementById(boardArray[0]).appendChild(playerTwo);
    document.getElementById("player-two").style.backgroundColor = players.player2.color

    playerThree = document.createElement("DIV");
    playerThree.setAttribute("id", players.player3.id);
    playerThree.setAttribute("class", players.player3.class);
    document.getElementById(boardArray[0]).appendChild(playerThree);
    document.getElementById("player-three").style.backgroundColor = players.player3.color

    playerFour = document.createElement("DIV");
    playerFour.setAttribute("id", players.player4.id);
    playerFour.setAttribute("class", players.player4.class);
    document.getElementById(boardArray[0]).appendChild(playerFour);
    document.getElementById("player-four").style.backgroundColor = players.player4.color
    break;
    }
    });