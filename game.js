import Deck from "./deck.js";

export default class Game {
  startGame() {
    // 1 - CREATE DECK
    const deck = new Deck();

    // 2 - SHUFFLE DECK
    deck.shuffleDeck();

    // 3 - CREATE PLAYERS
    let playerOne = [];
    let playerTwo = [];

    // 4 - DEAL DECK - BOTH PLAYERS HAVE 26 SHUFFLED CARDS
    this.dealDeck(playerOne, playerTwo, deck.cards);
    console.log("START OF GAME");
    console.log("PLAYER 1: ", playerOne.length);
    console.log("PLAYER 2: ", playerTwo.length);

    // SET UP VARIABLES
    // THE CARDS THAT ARE OUT OF DECKS, THESE WILL BE INSERTED INTO A PLAYERS ARRAYS
    let cardOne;
    let cardTwo;
    let handResult; // CONTAINS PLAYER1 WINNER (1), PLAYER2 WINNER (2) OR TIE (0)

    let continueGame = true; // GAME WILL STOP WHEN THIS IS SET TO FALSE
    let counter = 0; // INCREMENT BY 1 EACH ROUND

    // ONE LOOP EQUALLS ONE HAND
    // KEEP LOOPING FOR 50 ROUNDS
    while (continueGame) {
      // POPPING ONE CARD FROM EACH PLAYERS ARRAY
      cardOne = this.getCard(playerOne);
      cardTwo = this.getCard(playerTwo);

      // CHECKING IF PLAYER RAN OUT OF CARDS
      if(cardOne === undefined || cardTwo === undefined){
        continueGame = false;
        break;
      }

      // PLAYING A SINGLE HAND
      handResult = this.drawHand(cardOne, cardTwo);

      // RESULT HAS BEEN DETERMINED
      // 1 - PUT BOTH CARDS IN PLAYER1 DECK
      // 2 - PUT BOTH CARDS IN PLAYER2 DECK
      if (handResult === 1) {
        playerOne.push(cardOne, cardTwo);
      } else if (handResult === 2) {
        playerTwo.push(cardOne, cardTwo);
      }
      
      // TO HANDLE TIES
      // handResult === 0
      // TIES ARE IGNORED

      counter++;

      // LAST THING TO DO IS CHECK IF GAME HAS ENDED
      if(counter > 26){
        continueGame = false;
      }
    }

    // PRINT RESULTS
    console.log("PLAYER 1: ", playerOne);
    console.log("PLAYER 2: ", playerTwo);

    // DETERMINE WINNER
    if(playerOne.length > playerTwo.length){
      console.log("PLAYER 1 WINS: ", playerOne.length);
    } else {
      console.log("PLAYER 2 WINS: ", playerTwo.length);
    }
  }


  // PUSHING A CARD INTO A PLAYERS ARRAY
  // PLAYER 1 GETS EVEN INDEX
  // PLAYER 2 GET ODD INDEX
  dealDeck(playerOne, playerTwo, passedInDeck) {
    for (let i = 0; i < passedInDeck.length; i++) {
      if (i % 2 === 0) {
        const card = passedInDeck[i];
        playerOne.push(card);
      } else {
        const card = passedInDeck[i];
        playerTwo.push(card);
      }
    }
  }

  // RETURNS 1 IF PLAYER 1 WINS
  // RETURNS 2 IF PLAYER 2 WINS
  // RETURNS 0 IF ITS A TIE
  drawHand(cardOne, cardTwo) {
    console.log(
      `Player One Hand:`,
      cardOne,
      "     vs     ",
      `Player Two Hand: `,
      cardTwo
    );
    
      if (cardOne.numberValue > cardTwo.numberValue) {
        return 1;
      } else if (cardTwo.numberValue > cardOne.numberValue) {
        return 2;
      } else {
        return 0;
      }
  }

  // PASS AN ARRAY OF CARDS, RETURN SINGLE CARD
  getCard(playerDeck) {
    const card = playerDeck.shift();
    return card;
  }
}
