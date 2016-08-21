function player() {
  this.player_hand = [];
  this.hand_value = 0;
  this.message = "";
}

player.prototype.startingHand = function(card_one, card_two) {
  this.hand_value = 0;
  this.player_hand.push(card_one);
  this.player_hand.push(card_two);
};

player.prototype.hitMe = function(extra_card) {
  this.player_hand.push(extra_card);
  this.calculateHandTotal();
  if (this.hand_value > 21) {
    this.message = "Bust!!!";
  }
};

player.prototype.calculateHandTotal = function() {

  for (i = 0; i < this.player_hand.length; i++) {
    if (this.player_hand[i].includes('ace')) {
      this.hand_value += 1;
    }
    if (this.player_hand[i].includes('two')) {
      this.hand_value += 2;
    }
    if (this.player_hand[i].includes('three')) {
      this.hand_value += 3;
    }
    if (this.player_hand[i].includes('four')) {
      this.hand_value += 4;
    }
    if (this.player_hand[i].includes('five')) {
      this.hand_value += 5;
    }
    if (this.player_hand[i].includes('six')) {
      this.hand_value += 6;
    }
    if (this.player_hand[i].includes('seven')) {
      this.hand_value += 7;
    }
    if (this.player_hand[i].includes('eight')) {
      this.hand_value += 8;
    }
    if (this.player_hand[i].includes('nine')) {
      this.hand_value += 9;
    }
    if (this.player_hand[i].includes('ten')) {
      this.hand_value += 10;
    }
    if (this.player_hand[i].includes('jack')) {
      this.hand_value += 10;
    }
    if (this.player_hand[i].includes('queen')) {
      this.hand_value += 10;
    }
    if (this.player_hand[i].includes('king')) {
      this.hand_value += 10;
    }

  }
  // if (this.player_hand[1].includes('ace')) {
  //   this.hand_value = this.hand_value + 1;
  // }
};
