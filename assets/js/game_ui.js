var onReadyEvents = function() {
  dealClicked();
  hitMeClicked();
  holdClicked();
  player_total = 0;
  dealer_total = 0;
};

function dealClicked() {
    $("#deal").click(function () {
      $('#player_card_one').text(player_hand[0]);
      $('#player_card_two').text(player_hand[1]);
      $('#dealer_card_one').text(dealer_hand[0]);
      $('#dealer_card_two').text(dealer_hand[1]);
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
    addDealerCard();
  });
}

function addDealerCard() {
  if ($('#dealer_card_three').text('')) {
    $('#dealer_card_three').text(d_extra_card);
  } else if ($('#dealer_card_four').text('')) {
    $('#dealer_card_four').text(d_extra_card);
  } else {
    $('#dealer_card_five').text(d_extra_card);
  }
}
