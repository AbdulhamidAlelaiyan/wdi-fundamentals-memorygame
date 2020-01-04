// cards = ["queen", "queen", "king", "king"];
cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"
	}, 
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"
	}, 
	{
		rank: 'king',
		suit: 'hearts', 
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: 'king',
		suit: 'diamonds', 
		cardImage: "images/king-of-diamonds.png"
	}
];
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
	cardsInPlay.push(card.rank);
	console.log('User flipped ' + card.rank + '!');
	console.log(card.suit);
	console.log(card.cardImage);
}


flipCard(0); 
flipCard(2);
checkForMatch();