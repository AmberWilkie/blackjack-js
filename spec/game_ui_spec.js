describe('UI Testing', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('game_partial.html');
    $.holdReady(false);

    player_hand = ['twoh', 'queens'];
    dealer_hand = ['sevend', 'aceh'];

    d_extra_card = 'jacks';
    hit_me_card = 'threed';
  });

  afterEach(function() {
    // If you need to reset some values after each testing
    // you can do it here.
  });

  describe("Player functions on UI", function() {

    xit("when deal is clicked", function() {
      $('#deal').trigger('click');
      expect($('#player_card_one').text()).toEqual(!null);
      expect($('#player_card_two').text()).toEqual(!null);
      expect($('#dealer_card_one').text()).toEqual(!null);
      expect($('#dealer_card_two').text()).toEqual(!null);
    });

    it("when hit-me button is clicked", function () {
      $('#hit_me').trigger('click');
      expect($('#player_card_three').text()).toEqual('threed');
    });

    it ('alerts if player hand value goes over 21', function() {
      player_one.hitMe('jackh');
      player_one.hitMe('kingd');
      expect(game_message).toEqual('Bust!!!!');
    });
  });

  describe ("Dealer functions on UI", function () {

    it("when hold button clicked", function () {
      $('#hold').trigger('click');
      expect($('#dealer_card_three').text()).toEqual('jacks');
    });
  });
});
