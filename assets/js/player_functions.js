function player() {
  this.player_hand = [];
}

player.prototype.startingHand = function(card_one, card_two) {
  this.player_hand.push(card_one);
  this.player_hand.push(card_two);
};

player.prototype.hitMe = function(extra_card) {
  this.player_hand.push(extra_card);
};
