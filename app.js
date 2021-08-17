let options = ["Rock", "Paper", "Scissors"]


function autoPlay(){
return Math.floor(Math.random() * (options.length));
}



function haveShowdown(player1Choice, player2Choice){

    if(options.indexOf(player1Choice)===options.indexOf(player2Choice)){
        return "Play again!";
    } else
    if((options.indexOf(player1Choice)-1)===options.indexOf(player2Choice)||(player2Choice==="Scissors"&&player1Choice==="Rock")){
        return "Player 1 wins this round";
    } else
    if((options.indexOf(player2Choice)-1)===options.indexOf(player1Choice)||(player1Choice==="Scissors"&&player2Choice==="Rock")){
        return "Player 2 wins this round";
    }
}
