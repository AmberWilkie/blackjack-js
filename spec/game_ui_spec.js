describe('UI Testing', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('game_partial.html');
    $.holdReady(false);

    p_first_card = 'twoh';
    p_second_card = 'queens';
    d_first_card = 'sevend';
    d_second_card = 'aceh';
    d_third_card = 'jacks';
    hit_me_card = 'threed';
  });

  afterEach(function() {
    // If you need to reset some values after each testing
    // you can do it here.
  });

  describe("Player functions on UI", function() {

    it("when deal is clicked", function() {
      $('#deal').trigger('click');
      expect($('#player_card_one').text()).toEqual("twoh");
      expect($('#player_card_two').text()).toEqual("queens");
      expect($('#dealer_card_one').text()).toEqual("sevend");
      expect($('#dealer_card_two').text()).toEqual("aceh");
    });

    it("when hit-me button is clicked", function () {
      $('#hit_me').trigger('click');
      expect($('#player_card_three').text()).toEqual('threed');
    });
  });

  describe ("Dealer functions on UI", function () {

    it("when hold button clicked", function () {
      $('#hold').trigger('click');
      expect($('#dealer_card_three').text()).toEqual('jacks');
    });
  });
});
