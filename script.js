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
let j=0
document.getElementById("button").addEventListener("click", function(){
    const increment = Math.round(Math.random()*5)+1;
    if(j==i){j=0}
    /*if win this happens*/
    if(players[j].position+increment>boardArray.length){
        /*you won alert+button*/
        document.getElementById("finish").style.display = "block"
        document.getElementById("button").style.display = "none"
        document.getElementById("finish").innerHTML=`<p id="winningPlayer">Player ${players[j].id} won!</p>
        <button type="button" id="restart">Start again</button>`
    }
    /*if not win this happens*/
    else{
    document.getElementById(boardArray[players[j].position+increment]).appendChild(document.getElementById(players[j].id));
    players[j].position=players[j].position+increment;
    j++}
    /*make game restart=page reload*/
    document.getElementById("restart").addEventListener("click", function(){
        window.location.href = window.location.href;
    });
  }  
);

/*TO DO:
-show me "player 1 is playing"
-see the dice
-keyframe animation to append when player moves
-give name to player, message when someone finish
-want arrays outside
-extra array for event cards (?)
*/