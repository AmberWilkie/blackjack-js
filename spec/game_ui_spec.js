describe('UI Testing', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('game_partial.html');
    $.holdReady(false);

    this.player_hand = ['twoh', 'queens'];
    dealer_hand = ['sevend', 'aceh'];

    d_extra_card = 'jacks';
    hit_me_card = 'threed';
  });

  afterEach(function() {
    // If you need to reset some values after each testing
    // you can do it here.
  });

  describe("Player functions on UI", function() {

    it("when deal is clicked", function() {
      $('#deal').trigger('click');
      expect($('#player_card_one').text()).toEqual(!null);
      expect($('#player_card_two').text()).toEqual(!null);
      expect($('#dealer_card_one').text()).toEqual('Concealed');
      expect($('#dealer_card_two').text()).toEqual(!null);
    });

    it("when hit-me button is clicked", function () {
      $('#hit_me').trigger('click');
      expect($('#player_card_three').text()).toBeDefined();
    });

    it ('alerts if player hand value goes over 21', function() {
      player_one.hitMe('kingc');
      expect(game_message).toEqual('Bust!!!!');
    });
  });

  describe ("Dealer functions on UI", function () {

    it("when hold button clicked", function () {
      $('#hold').trigger('click');
      expect($('#dealer_card_three').text()).toBeDefined();
    });
  });
});

describe ("Dealer has to be dealt four cards", function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('game_partial.html');
    $.holdReady(false);

    dealer_hand = ['queend', 'sixh'];
    d_extra_card = 'jacks';
  });

  it("when hold button clicked", function() {
    $("#hold").trigger("click");
    expect($('#display_message').text()).toEqual("Dealer Busts! You win!!!!");
  });


});
