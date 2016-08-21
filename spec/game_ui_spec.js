describe('Partial sample', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('game_partial.html');
    $.holdReady(false);

    p_first_card = 'twoh';
  });

  afterEach(function() {
    // If you need to reset some values after each testing
    // you can do it here.
  });

  describe("displays text", function() {

    it("when deal is clicked", function() {
      $('#deal').trigger('click');
      expect($('#player_card_one').text()).toEqual("twoh");
    });
  });
});
