describe('Partial sample', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('game_partial.html');
    $.holdReady(false);
  });

  afterEach(function() {
    // If you need to reset some values after each testing
    // you can do it here.
  });

  describe("displays text", function() {

    it("when deal is clicked", function() {
      $('#deal').trigger('click');
      expect($('#display_message').text()).toBe('No message yet.');
    });
  });
});
