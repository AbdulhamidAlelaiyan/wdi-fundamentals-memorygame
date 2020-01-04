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
		alert("You found a match!");
	} else {
		alert("Sorry try again!");
	}
}

function flipCard() {
	cardId = this.getAttribute('data-id');
	let card = cards[cardId];
	cardsInPlay.push(card.rank);
	this.setAttribute('src', card.cardImage);
	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
}

function createBoard() {
	for(let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png"); 
		cardElement.setAttribute('data-id', i); 
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();