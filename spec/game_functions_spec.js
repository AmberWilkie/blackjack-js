describe ("Setup a Game", function () {

  beforeEach(function() {
    player_one = new player();
    dealer = new player();
    new_deck = new createDeck();
    new_game = new game();
    card_one = new_deck.deal();
    card_two = new_deck.deal();
    card_three = new_deck.deal();
    card_four = new_deck.deal();
  });

  it("sets up the game with a player, dealer and deck", function() {
    expect(player_one).toBeDefined();
    expect(dealer).toBeDefined();
    expect(deck).toBeDefined();
  });

  it("gives hand to player_one", function() {
    player_one.startingHand(card_one, card_two);
    expect(player_one.player_hand.length).toEqual(2);
  });

  it("gives hand to dealer", function() {
    dealer.startingHand(card_three, card_four);
    expect(dealer.player_hand.length).toEqual(2);
  });

});

// describe ("")
