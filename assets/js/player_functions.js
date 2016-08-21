function player() {
  this.player_hand = [];
  this.message = "";
}

player.prototype.startingHand = function(card_one, card_two) {
  this.hand_value = 0;
  this.player_hand.push(card_one);
  this.player_hand.push(card_two);
};

player.prototype.hitMe = function(extra_card) {
  this.player_hand.push(extra_card);
  // this.calculateHandTotal();
  // if (this.hand_value > 21) {
  //   this.message = "Bust!!!";
  // }
};

player.prototype.calculateHandTotal = function() {
  this.hand_value = 0;
  aces = 0;
  for (i = 0; i < this.player_hand.length; i++) {
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
    if (this.player_hand[i].includes('ace')) {
      aces += 1;
      this.hand_value += 11;
    }
    if ((aces > 0) && (this.hand_value > 21)) {
      this.hand_value -= 10;
    }
    // if (this.hand_value > 21) {
    //   for (j = 0; j < this.player_hand.length; j++) {
    //     if (this.player_hand[j].includes('ace')) {
    //       this.hand_value -= 10;
    //       break;
    //     }
    //   }
    // }
  }
  this.message = this.hand_value;
};
