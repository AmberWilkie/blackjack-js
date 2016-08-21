var onReadyEvents = function() {
  dealClicked(this.p_first_card);
};

function dealClicked() {
    $("#deal").click(function () {
      $('#player_card_one').text(p_first_card);
      $('#player_card_two').text(p_second_card);
      $('#dealer_card_one').text(d_first_card);
      $('#dealer_card_two').text(d_second_card);
    });
}
