const play_options = ["rock","paper","scissor"];
let player_point=0 , computer_point=0;


//function to pick a random play_option as a computer
function computerPlay()
{
    return play_options[Math.floor(Math.random()*3)];
}


//function to decide the round
function singleRoundPlay(playerSelection,computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection=="rock" && computerSelection=="paper"){
        computer_point++;
        document.getElementById("subresult").innerText='Paper beats Rock';
    }else if(playerSelection=="rock" && computerSelection=="scissor"){
        player_point++;
        document.getElementById("subresult").innerText='Rock beats Scissor';
    }else if(playerSelection===computerSelection){
        document.getElementById("subresult").innerText='Its Tie! ';
    }else if(playerSelection=="paper" && computerSelection=="scissor"){
        computer_point++;
        document.getElementById("subresult").innerText=' Scissor beats Paper';
    }else if(playerSelection=="paper" && computerSelection=="rock"){
        player_point++;
        document.getElementById("subresult").innerText='Paper beats Rock';
    }else if (playerSelection=="scissor" && computerSelection=="paper"){
        player_point++;
        document.getElementById("subresult").innerText='Scissor beats Pape';
    }else if(playerSelection=="scissor" && computerSelection=="rock"){
        computer_point++;
        document.getElementById("subresult").innerText=' Rock beats Scissor';
    }
    document.getElementById("result").innerHTML='';
    document.getElementById("point").innerText=`You: ${player_point}    Opponent: ${computer_point}`;
        
}

/*
function game(){
    player_point=0;
    computer_point=0;
    for(let i=0;i<5;i++){
        let playerOpt=prompt("Enter your option:");
        singleRoundPlay(playerOpt,computerPlay());
    }
    if(player_point==computer_point){
        return "Its Tie!!! You:"+player_point.toString() + " Computer " + computer_point.toString();
    }
    else if(player_point>computer_point){
        return "You Win!!! You:"+player_point.toString() + " Computer " + computer_point.toString();
    }
    else if(player_point<computer_point){
        return "You Lose!!! You:"+player_point.toString() + " Computer " + computer_point.toString();
    }
}*/


function playRound( playeroption ){
    singleRoundPlay( playeroption, computerPlay());
    if(player_point==5){
        document.getElementById("result").innerHTML="You Won!!! ";
        document.getElementById("result").style.color="limegreen";
        
        computer_point=0, player_point=0;
    }
    if(computer_point==5){
        document.getElementById("result").innerHTML="You Lose!!!";
        document.getElementById("result").style.color="red";
        computer_point=0,player_point=0;
    }
}