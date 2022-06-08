
var expect = chai.expect;

describe("Game", function () {

  //console.log("xxxxxxxxx");
   it("dealDeck", function () {

    function doSomething() {
        if (typeof playerOne.length != 26) {
            throw new Error('Player does not have 26 cards.');
          }
          return true;
        }
//     // create Game object

//     let playerOne = [] 
    
//     const game = new Game();

//     // initallize variables

    // const deck = new Deck();
    // deck.shuffleDeck();

let playerOne = [];
//     //let playerTwo = [];

    doSomething(playerOne.length == 26);
    expect(game).to.equal(true);
});

    it('should throw an error if not equal to 26', function() {
        expect (function() {
            doSomething(playerOne.length != 26);
        }).to.throw(Error);
    });

});
    
  



// HTML
// - LINKS THE JS
// - LINKS THE JS_TEST
// JS -> YOUR CODE YOU ARE TESTING
// JS_TEST -> HAS THE TESTS
