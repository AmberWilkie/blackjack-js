describe ("Player functions", function () {

  beforeEach( function () {
    new_player = new player();
    deck = ['acec', 'aced', 'aceh', 'aces', 'twoc', 'twod', 'twoh', 'twos', 'threec', 'threed', 'threeh', 'threes', 'fourc', 'fourd', 'fourh', 'fours', 'fivec', 'fived', 'fiveh', 'fives', 'sixc', 'sixd', 'sixh', 'sixs', 'sevenc', 'sevend', 'sevenh', 'sevens', 'eightc', 'eightd', 'eighth', 'eights', 'ninec', 'nined', 'nineh', 'nines', 'tenc', 'tend', 'tenh', 'tens', 'jackc', 'jackd', 'jackh', 'jacks', 'queenc', 'queend', 'queenh', 'queens', 'kingc', 'kingd', 'kingh', 'kings'];

  });

  it ("creates a two-card 'hand'", function() {
    new_player.startingHand('acec', 'aced');
    expect(new_player.player_hand.length).toEqual(2);
  });

  it ("calculates total in hand for two aces", function() {
    new_player.startingHand('acec', 'aced');
    new_player.calculateHandTotal();
    expect(new_player.hand_value).toEqual(2);
  });

  it ("calculates total in hand for a five and a queen", function() {
    new_player.startingHand('fivec', 'queenh');
    new_player.calculateHandTotal();
    expect(new_player.hand_value).toEqual(15);
  });

});

describe ("Hit me", function() {

  beforeEach(function() {
    new_player = new player();
    new_player.startingHand('acec', 'aced');
    new_player.hitMe('oneh');
  });

  it ("can 'hit me'", function() {
    expect(new_player.player_hand.length).toEqual(3);
  });

});
