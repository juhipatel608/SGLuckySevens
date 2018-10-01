function rollGame() {
    var bet = Number(document.forms["betform"]["bet"].value);
    var maxWin = 0;
    var winCount = [bet];
    var rollCounter = 0;
 

    //If the starting bet is less than or equal to 0, display an error message.
	if (bet <= 0) {
		alert("oops, enter a greater than zero.");
		document.forms["betform"]["bet"].value = "";
		document.forms["betform"]["bet"];
		return false;
	}
    
    
	for (var money = bet; money >= 1; rollCounter++) {
		diceOne = Math.floor(Math.random() * 6) + 1;
        diceTwo = Math.floor(Math.random() * 6) + 1;
        
		if (Number(diceOne + diceTwo) == 7) {
			money += 4;
            winCount[winCount.length] = money;
            
		} else {
			money -= 1;
			winCount[winCount.length] = money;
		}
    }
    


	for (var indexCounter = 0; indexCounter < winCount.length; indexCounter++) {
		if (winCount[indexCounter] > maxWin) {
			maxWin = winCount[indexCounter];
		}
    }
    

    document.getElementById("results").style.display = "block";
    
	document.getElementById("startBet").innerHTML = ("$" + bet + ".00");
	document.getElementById("rollsToBroke").innerHTML = rollCounter;
	document.getElementById("highAmount").innerHTML = ("$" + maxWin + ".00");
    document.getElementById("highRollCount").innerHTML = winCount.indexOf(maxWin);
    

	document.getElementById("submitButton").innerHTML = "Play Again?";
    document.forms["betform"]["bet"];

	return false;
}




