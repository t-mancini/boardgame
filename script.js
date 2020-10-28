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

let players = [
    {
        id: "player-one",
        class: "player",
        position:0,
        color:"red"},
    {
        id: "player-two",
        class: "player",
        position:0,
        color:"blue"},
    {
        id: "player-three",
        class: "player",
        position:0,
        color:"green",},
    {
        id: "player-four",
        class: "player",
        position:0,
        color:"yellow"}
    ]

let rollTheDice= () => {
    return diceNumber = Math.round(Math.random()*5)+1;
}
/*create new players*/
document.getElementById("selectPlayers").addEventListener("click", function(){
    switch (document.getElementById("player-number").value) {
        case document.getElementById("player-number").value:
            let createPlayer = ``
            for (i = 0; i < document.getElementById("player-number").value; i++) {
                 createPlayer += `<div id="${players[i].id}" class="${players[i].class}" style="background-color:${players[i].color}"></div>`
                document.getElementById(boardArray[0]).innerHTML=createPlayer
            } 
            document.getElementById("init").style.display = 'none';
        break;
    }
    });

/*move players*/
document.getElementById("button").addEventListener("click", function(){
    for (let i = 0; i <= players.length; i++) {
        if(i=players.length){
            i=0
        }
        document.getElementById(boardArray[players[i].position]).removeChild(document.getElementById(players[i].id));
        players[i].position=players[i].position+rollTheDice();
        document.getElementById(boardArray[players[i].position]).appendChild(document.getElementById(players[i].id));
            }
    }
);

/* backup. create oldposition and newposition inside objects. let both =0 */
    /* document.getElementById("button").addEventListener("click", function(){
        oldPosition = newPosition;
        newPosition=newPosition+rollTheDice();
        document.getElementById(boardArray[newPosition]).appendChild(document.getElementById("player-one"));
        document.getElementById(boardArray[oldPosition]).removeChild(document.getElementById("player-one"));
        }); */





/*i need a "when you finish the array you won"function*/

    /*i need a start again button when everything ends, and i need div id="init" to be shown again*/