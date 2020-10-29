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
let keyNumber = []
let keyId = []
let keyColor =[]
let createPlayer = ""
let createForm = ""
let keyName = []
let players = []
/* first loop. create form and thats all */
document.getElementById("selectPlayers").addEventListener("click", function(){
for(let i=0; i<=document.getElementById("player-number").value-1;i++){
    createForm += `<form>
    <label for="${keyNumber[i]}">Player ${i+1}:</label><br>
    <input type="text" id="${keyNumber[i]}" name="${keyNumber[i]}"><br>
</form>`
}
/*remove some stuff and shows me other stuff*/
document.getElementById("nameChoice").innerHTML=createForm
document.getElementById("init").style.display = 'none';
document.getElementById("setName").style.display = 'block';
})
/*creates name array*/ /*inside the same for loop create the players array*/
document.getElementById("setName").addEventListener("click", function(){
    for(let i=0;i<document.getElementById("player-number").value; i++){
        keyNumber.push(i+1)
        keyId.push(`player-${keyNumber[i]}`)
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        keyColor.push("#"+randomColor)
        /* give the div a id so that it can getelementbyid */
        document.getElementsByTagName("input")[i].id=keyNumber[i]
        keyName.push(document.getElementById(keyNumber[i]).value)
        /*i dont need the players array anymore, have all the data stored??*/
        players.push( `{id: ${keyId[i]}, name: ${keyName[i]}, class: "player", position: 0, color:${keyColor[i]}}`)
        createPlayer += `<div id="${keyId[i]}" class="player" style="background-color:${keyColor[i]}"></div>`
    }
    /*delete some stuff and show some stuff*/
    document.getElementById(boardArray[0]).innerHTML=createPlayer
    document.getElementById("setName").style.display = 'none';
    document.getElementById("nameChoice").style.display = 'none';
    document.getElementById("button").style.display = 'block';
    document.getElementById("whoIsPlaying").style.display = 'block';
    document.getElementById("whoIsPlaying").innerHTML=`<p>${keyName[0]}, your turn</p>`
})
/*move*/
let i=0
document.getElementById("button").addEventListener("click", function(){
    const increment = Math.round(Math.random()*5)+1;
    if(i==keyNumber.length){i=0}
    /*if win this happens*/
    /* if(players[i].position+increment>boardArray.length){ */
        /*you won alert+button*/

        /* document.getElementById("finish").style.display = "block"
        document.getElementById("button").style.display = "none"
        document.getElementById("finish").innerHTML=`<p id="winningPlayer">${players[j].name} won!</p>
        <button type="button" id="restart">Start again</button>`
        document.getElementById(boardArray[boardArray.length-1]).appendChild(document.getElementById(players[j].id)); */
        /*make game restart=page reload*/
    /* document.getElementById("restart").addEventListener("click", function(){
        window.location.href = window.location.href; */
    })
    /* } */
    /*if not win this happens*/
   /*  else{ */
    document.getElementById(boardArray[players[i].position+increment]).appendChild(document.getElementById(players[i].id));
    players[i].position=players[i].position+increment;
    /*not fully working here. i need to put it back to arr[0]*/
    /* if(j==i-1){j=-1}
    document.getElementById("whoIsPlaying").innerHTML=`<p>${players[j+1].name}, your turn</p>` */
    i++  
/* }}) */;