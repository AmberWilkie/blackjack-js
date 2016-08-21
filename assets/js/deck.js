function createDeck() {
  this.deck = [];
  deck = this.deck;

  fourSuits("one");
  fourSuits("two");
  fourSuits("three");
  fourSuits("four");
  fourSuits("five");
  fourSuits("six");
  fourSuits("seven");
  fourSuits("eight");
  fourSuits("nine");
  fourSuits("ten");
  fourSuits("jack");
  fourSuits("queen");
  fourSuits("king");
}

function fourSuits(card_value) {
  club = card_value + "c";
  diamond = card_value + "d";
  heart = card_value + "h";
  spade = card_value + "s";

  deck.push(club);
  deck.push(diamond);
  deck.push(heart);
  deck.push(spade);
}

createDeck.prototype.deal = function() {
  this.card_one = null;
  random = Math.floor((Math.random() * deck.length) + 1);
  card_one = deck[random];
  deck.pop(card_one);
};
