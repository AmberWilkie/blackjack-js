var onReadyEvents = function() {
  onReadyStuff();
  setUp();
};

function dealClicked() {
  $("#deal").click(function () {
      $('#player_card_one').text(player_one.player_hand[0]);
      $('#player_card_two').text(player_one.player_hand[1]);
      $('#dealer_card_one').text('Concealed');
      $('#dealer_card_two').text(dealer.player_hand[1]);
      player_one.calculateHandTotal();
      dealer.calculateHandTotal();
      changeMessage();
    });
}

function hitMeClicked() {

  $('#hit_me').click(function () {

    if ($('#player_card_three').is(':empty')) {
      hit_me_card = new_deck.deal();
      player_one.hitMe(hit_me_card);
      $('#player_card_three').text(hit_me_card);
    } else if ($('#player_card_four').is(':empty')) {
      hit_me_card2 = new_deck.deal();
      player_one.hitMe(hit_me_card2);
      console.log("got into second if in hit-me");
      $('#player_card_four').text(hit_me_card2);
    } else {
      hit_me_card3 = new_deck.deal();
      player_one.hitMe(hit_me_card3);
      $('#player_card_five').text(hit_me_card3);
    }
    changeMessage();
  });
}

function holdClicked() {
  $('#hold').click(function () {
    $('#dealer_card_one').text(dealer.player_hand[0]);

    while (dealer.hand_value < 17) {
        addDealerCard();
        changeDealerMessage();
      }
    if ((dealer.hand_value > player_one.hand_value) && (dealer.hand_value < 22)) {
      $('#final_message').text('Dealer wins!');
      reset();
    } else if (dealer.hand_value == player_one.hand_value) {
      $('#final_message').text('Push!');
      reset();
    } else {
      $('#final_message').text('Player wins!');
      reset();
    }
  });
}

function addDealerCard() {
  if ($('#dealer_card_three').is(':empty')) {
    new_card = new_deck.deal();
    dealer.hitMe(new_card);
    $('#dealer_card_three').text(new_card);
  } else if ($('#dealer_card_four').is(':empty')) {
    new_card = new_deck.deal();
    dealer.hitMe(new_card);
    $('#dealer_card_four').text(new_card);
  } else {
    new_card = new_deck.deal();
    dealer.hitMe(new_card);
    $('#dealer_card_five').text(new_card);
  }
  changeDealerMessage();

}

function changeMessage() {
  player_one.calculateHandTotal();
  if (player_one.hand_value < 22) {
  game_message = ("Here's the player's total: " + player_one.message + " and here's the dealer's total: ***concealed***");
  } else {
    game_message = "Bust!!!!";
    $('#hit_me').hide();
    $('#hold').hide();
    reset();
  }
  $('#display_message').text(game_message);
}
function changeDealerMessage() {
  dealer.calculateHandTotal();
  if (dealer.hand_value < 22) {
  game_message = ("Here's the player's total: " + player_one.message + " and here's the dealer's total: " + dealer.message);
  } else {
  game_message = "Dealer Busts! You win!!!!";
  reset();
  }
  $('#display_message').text(game_message);
}

function onReadyStuff(){
  dealClicked();
  hitMeClicked();
  holdClicked();
}
function setUp() {
  player_total = 0;
  dealer_total = 0;
  player_one = new player();
  dealer = new player();
  new_deck = new createDeck();
  card_one = new_deck.deal();
  card_two = new_deck.deal();
  card_three = new_deck.deal();
  card_four = new_deck.deal();
  player_one.startingHand(card_one, card_two);
  dealer.startingHand(card_three, card_four);
  $('#hit_me').show();
  $('#hold').show();
  $('#player_card_three').text('');
  $('#player_card_four').text('');
  $('#player_card_five').text('');
  $('#dealer_card_three').text('');
  $('#dealer_card_four').text('');
  $('#dealer_card_five').text('');
  $('#final_message').text('');
}

function reset() {
  $('#deal').click(function() {
    setUp();
    dealClicked();
  });
}
