function createDeck() {
  this.deck = [];
  deck = this.deck;

  fourSuits("ace", 1);
  fourSuits("two", 2);
  fourSuits("three", 3);
  fourSuits("four", 4);
  fourSuits("five", 5);
  fourSuits("six", 6);
  fourSuits("seven", 7);
  fourSuits("eight", 8);
  fourSuits("nine", 9);
  fourSuits("ten", 10);
  fourSuits("jack", 10);
  fourSuits("queen", 10);
  fourSuits("king", 10);
}

function fourSuits(card_face, value) {
  club = card_face + "c";
  diamond = card_face + "d";
  heart = card_face + "h";
  spade = card_face + "s";

  deck.push(club);
  deck.push(diamond);
  deck.push(heart);
  deck.push(spade);
}

createDeck.prototype.deal = function() {
  this.card_one = null;
  random = Math.floor((Math.random() * deck.length) + 1);
  card_one = deck[random];
  deck.pop(random);
  return card_one;
};
