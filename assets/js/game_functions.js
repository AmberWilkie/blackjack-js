var onReadyEvents = function() {
  dealClicked(this.p_first_card);
};

function dealClicked() {
    $("#deal").click(function () {
      $('#player_card_one').text(p_first_card);
    });
}
