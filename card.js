export default class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
    this.numberValue = this.getNumberValue(value);
  }

  getNumberValue(cardValue) {
    if (cardValue === "A") return 1;
    else if (cardValue === "J") return 11;
    else if (cardValue === "Q") return 12;
    else if (cardValue === "K") return 13;
    else return cardValue;
  }
}
