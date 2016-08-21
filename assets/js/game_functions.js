var onReadyEvents = function() {
  dealClicked();
  hitMeClicked();
  holdClicked();
};

function dealClicked() {
    $("#deal").click(function () {
      $('#player_card_one').text(p_first_card);
      $('#player_card_two').text(p_second_card);
      $('#dealer_card_one').text(d_first_card);
      $('#dealer_card_two').text(d_second_card);
    });
}

function hitMeClicked() {
  $('#hit_me').click(function () {
    if ($('#player_card_three').text('')) {
      $('#player_card_three').text(hit_me_card);
    } else if ($('#player_card_four').text('')) {
      $('#player_card_four').text(hit_me_card);
    } else {
      $('#player_card_five').text(hit_me_card);
    }
  });
}

function holdClicked() {
  $('#hold').click(function () {
    if ($('#dealer_card_three').text('')) {
      $('#dealer_card_three').text(d_third_card);
    } else if ($('#dealer_card_four').text('')) {
      $('#dealer_card_four').text(d_third_card);
    } else {
      $('#dealer_card_five').text(d_third_card);
    }
  });
}
