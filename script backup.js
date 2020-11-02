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
        idName: "p1",
        name: "",
        class: "player",
        position:0,
        color:"red"},
    {
        id: "player-two",
        idName: "p2",
        name: "",
        class: "player",
        position:0,
        color:"blue"},
    {
        id: "player-three",
        idName: "p3",
        name: "",
        class: "player",
        position:0,
        color:"green",},
    {
        id: "player-four",
        idName: "p4",
        name: "",
        class: "player",
        position:0,
        color:"yellow"}
    ]
/*create new players*/ /*hides initialize, show nameChoiceForm*/
document.getElementById("selectPlayers").addEventListener("click", function(){
    switch (document.getElementById("player-number").value) {
        case document.getElementById("player-number").value:
            document.getElementById("init").style.display = 'none';
            document.getElementById("setName").style.display = 'block';
            let createPlayer = ``
            let createForm =``
            for (i = 0; i < document.getElementById("player-number").value; i++) {
                 createPlayer += `<div id="${players[i].id}" class="${players[i].class}" style="background-color:${players[i].color}"></div>`
                 createForm += `<form>
                 <label for="${players[i].idName}">Player ${i+1}:</label><br>
                 <input type="text" id="${players[i].idName}" name="${players[i].idName}"><br>
             </form>`
                document.getElementById(boardArray[0]).innerHTML=createPlayer
                document.getElementById("nameChoice").innerHTML=createForm
            }
        break;
    }
    });
    /*save the names inside the object*/
    /*hides give me your name*/
    /*show move players button*/
    /*initialize player1 is playing text*/
document.getElementById("setName").addEventListener("click", function(){
    document.getElementById("setName").style.display = 'none';
    document.getElementById("nameChoice").style.display = 'none';
    document.getElementById("button").style.display = 'block';
    document.getElementById("whoIsPlaying").style.display = 'block';
    for (i = 0; i < document.getElementById("player-number").value; i++) {
        players[i].name=document.getElementById(players[i].idName).value
    }
    document.getElementById("whoIsPlaying").innerHTML=`<p>${players[0].name}, your turn</p>`})

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
        document.getElementById("finish").innerHTML=`<p id="winningPlayer">${players[j].name} won!</p>
        <button type="button" id="restart">Start again</button>`
        document.getElementById(boardArray[boardArray.length-1]).appendChild(document.getElementById(players[j].id));
        /*make game restart=page reload*/
    document.getElementById("restart").addEventListener("click", function(){
        window.location.href = window.location.href;
    })
    }
    /*if not win this happens*/
    else{
    document.getElementById(boardArray[players[j].position+increment]).appendChild(document.getElementById(players[j].id));
    players[j].position=players[j].position+increment;
    /*not fully working here. i need to put it back to arr[0]*/
    if(j==i-1){j=-1}
    document.getElementById("whoIsPlaying").innerHTML=`<p>${players[j+1].name}, your turn</p>`
    j++  
}});

;

/* stuff to change, by marc */
/* I would create the players array dinamicaly, meaning that I will not hardcode 4 players, instead I will create as many players as I select
I am not a big fan of switch cases :sweat_smile:
Don’t name a variable just j
Do not get super used to reload the webpage, it is tricky because later when doing more complex stuff, you will have more data in your webpage and if you do a reload, you are losing everything. What you could do is just reset all the variables to their initial values */

/*TO DO:
/*fully working, lets make it cuter!!*/
/*FIRST, CLEAN THIS STUPID JAVASCRIPT. MY EYES ARE BLEEDING*/
/*when someone wins i want him to append to last array index*/
/*
-see the dice
-keyframe animation to append when player moves
-want arrays outside
-cards
*/