describe ("Playing the game", function () {

  beforeEach( function () {
    player = new play();
    deck = ['onec', 'oned', 'oneh', 'ones', 'twoc', 'twod', 'twoh', 'twos', 'threec', 'threed', 'threeh', 'threes', 'fourc', 'fourd', 'fourh', 'fours', 'fivec', 'fived', 'fiveh', 'fives', 'sixc', 'sixd', 'sixh', 'sixs', 'sevenc', 'sevend', 'sevenh', 'sevens', 'eightc', 'eightd', 'eighth', 'eights', 'ninec', 'nined', 'nineh', 'nines', 'tenc', 'tend', 'tenh', 'tens', 'jackc', 'jackd', 'jackh', 'jacks', 'queenc', 'queend', 'queenh', 'queens', 'kingc', 'kingd', 'kingh', 'kings'];
    player.receiveCards('onec', 'oned');
  });

  it ("creates a two-card 'hand'", function() {
    expect(player.player_hand.length).toEqual(2);
  });

});
