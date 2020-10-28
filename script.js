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
    const increment = Math.round(Math.random()*5)+1
    document.getElementById(boardArray[players[0].position+increment]).appendChild(document.getElementById(players[0].id));
    players[0].position=players[0].position+increment;
    }
        
);

/* document.getElementById("button").addEventListener("click", function(){
    const increment = rollTheDice()
    document.getElementById(boardArray[players[0].position+increment]).appendChild(document.getElementById(players[0].id));
    players[0].position=players[0].position+increment;
    }
        
); */




/*i need a "when you finish the array you won"function*/

    /*i need a start again button when everything ends, and i need div id="init" to be shown again*/