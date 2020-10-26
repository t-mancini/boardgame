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


const players = [
    {
        id: "player-one",
        class: "player",
        oldPosition: 0,
        newPosition:0,
        color:"red"},
    {
        id: "player-two",
        class: "player",
        oldPosition: 0,
        newPosition:0,
        color:"blue"},
    {
        id: "player-three",
        class: "player",
        oldPosition: 0,
        newPosition:0,
        color:"green",},
    {
        id: "player-four",
        class: "player",
        oldPosition: 0,
        newPosition:0,
        color:"yellow"}
    ]

    /*works, i will finish it after creating the players object}*/
    /*i need to delete the create player button, to prevent multiple clicks*/
   document.getElementById("selectPlayers").addEventListener("click", function(){
    switch (document.getElementById("player-number").value) {
        case "2":
            for (i = 0; i < 2; i++) {
                playerOne = document.createElement("DIV");
                playerOne.setAttribute("id", players[i].id);
                playerOne.setAttribute("class", players[i].class);
                document.getElementById(boardArray[0]).appendChild(playerOne);
                document.getElementById(players[i].id).style.backgroundColor = players[i].color 
            }
        break;
  case "3":
    for (i = 0; i < 3; i++) {
        playerOne = document.createElement("DIV");
        playerOne.setAttribute("id", players[i].id);
        playerOne.setAttribute("class", players[i].class);
        document.getElementById(boardArray[0]).appendChild(playerOne);
        document.getElementById(players[i].id).style.backgroundColor = players[i].color 
    }
    break;
  case "4":
    for (i = 0; i < 4; i++) {
        playerOne = document.createElement("DIV");
        playerOne.setAttribute("id", players[i].id);
        playerOne.setAttribute("class", players[i].class);
        document.getElementById(boardArray[0]).appendChild(playerOne);
        document.getElementById(players[i].id).style.backgroundColor = players[i].color 
    }
    break;
    }
    });