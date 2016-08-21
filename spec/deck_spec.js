describe("Create Deck", function() {
  var newdeck;

  beforeEach(function() {
    newdeck = new createDeck();
  });

  it("creates a deck", function () {
    expect(newdeck.deck).toBeDefined();
  });

  it("puts at least one card in the deck", function () {
    expect(newdeck.deck.length).toBeGreaterThan(0);
  });

  it("creates a deck with 52 cards", function() {
    expect(newdeck.deck.length).toEqual(52);
  });

  it("has all unique cards in the deck", function() {
    function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
    }
    var unique = newdeck.deck.filter( onlyUnique ); // returns ['a', 1, 2, '1']
    expect(unique.length).toEqual(52);
  });

  // it("creates a random number", function() {
  //   expect()
  // });

});

describe ("Setup", function() {
  beforeEach(function() {
    newdeck = new createDeck();
  });

  it("can pull a card at random from the deck", function() {
    newdeck.deal();
    expect(newdeck.card_one).toBeDefined();
  });

  it("removes dealt card from the deck", function () {
    newdeck.deal();
    expect(newdeck.deck.length).toEqual(51);
  });

});
