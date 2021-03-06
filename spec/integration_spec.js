describe ("Integration Tests", function () {

  beforeEach(function() {
    player_one = new player();
    dealer = new player();
    new_deck = new createDeck();
    card_one = new_deck.deal();
    card_two = new_deck.deal();
    card_three = new_deck.deal();
    card_four = new_deck.deal();
    player_one.startingHand(card_one, card_two);
    dealer.startingHand(card_three, card_four);
  });

  it("sets up the game with a player, dealer and deck", function() {
    expect(player_one).toBeDefined();
    expect(dealer).toBeDefined();
    expect(deck).toBeDefined();
  });

  it("gives hand to player_one", function() {
    expect(player_one.player_hand.length).toEqual(2);
  });

  it("gives hand to dealer", function() {
    expect(dealer.player_hand.length).toEqual(2);
  });

  it ("totals the player hand", function() {
    player_one.calculateHandTotal();
    expect(player_one.hand_value).toBeGreaterThan(1);
  });

  it ('totals the dealer hand', function () {
    dealer.calculateHandTotal();
    expect(dealer.hand_value).toBeGreaterThan(1);
  });

  it ("hits with random card if you say 'hit me'", function () {
    new_card = new_deck.deal();
    player_one.hitMe(new_card);
    expect((player_one.player_hand).length).toEqual(3);
  });

});
