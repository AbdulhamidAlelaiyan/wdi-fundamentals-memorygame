cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];

function checkForMatch() {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry try again!");
	}
}

function flipCard(cardId) {
	let card = cards[cardId];
	cardsInPlay.push(card);
	console.log('User flipped ' + cards[cardId] + '!');
}


flipCard(0); 
flipCard(2);
checkForMatch();