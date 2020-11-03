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

/*create a form that has the same number as the player i chose. NAME INPUT*/
document.getElementById("selectPlayers").addEventListener("click", function(){
for(let i=0; i<=document.getElementById("player-number").value-1;i++){
    createForm += `<form> <label for="${keyNumber[i]}">Player ${i+1}:</label><br> <input type="text" id="${keyNumber[i]}" name="${keyNumber[i]}"><br> </form>`
    }
    /*hides me divs i dont need anymore*/
document.getElementById("nameChoice").innerHTML=createForm
document.getElementById("init").style.display = 'none';
document.getElementById("setName").style.display = 'block';
    })

/*creating players. setting them inside an array of objects and showing them on the board*/
document.getElementById("setName").addEventListener("click", function(){
for(let i=0;i<document.getElementById("player-number").value; i++){
    keyNumber.push(i+1)
    keyId.push(`player-${keyNumber[i]}`)
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    keyColor.push("#"+randomColor)
    document.getElementsByTagName("input")[i].id=keyNumber[i]
    keyName.push(document.getElementById(keyNumber[i]).value)
    player = {"number":keyNumber[i],"id":keyId[i],"name":keyName[i],"class":"player","position":0,"color":keyColor[i]}
    players.push(player)
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

/*move players*/ /*wtf did i write, no sense*/
let i=0
document.getElementById("button").addEventListener("click", function(){
    const increment = Math.round(Math.random()*5)+1;
    if(i==players.length){i=0}
    /*if win this happens*/
    if(players[i].position+increment>boardArray.length){
        /*you won alert+button*/

        document.getElementById("finish").style.display = "block"
        document.getElementById("button").style.display = "none"
        document.getElementById("finish").innerHTML=`<p id="winningPlayer">${players[i].name} won!</p>
        <button type="button" id="restart">Start again</button>`
        document.getElementById(boardArray[boardArray.length-1]).appendChild(document.getElementById(players[i].id));
        /*make game restart=page reload*/
    document.getElementById("restart").addEventListener("click", function(){
        window.location.href = window.location.href;
    })
    }
    /*if not win this happens*/
    else{
    document.getElementById(boardArray[players[i].position+increment]).appendChild(document.getElementById(players[i].id));
    players[i].position=players[i].position+increment;
    if(i==players.length-1){i=-1}
    document.getElementById("whoIsPlaying").innerHTML=`<p>${players[i+1].name}, your turn</p>`
    i++  
}});

;
/* stuff to do */
/* Do not get super used to reload the webpage, */
/*when someone wins i want him to append to last array index*/