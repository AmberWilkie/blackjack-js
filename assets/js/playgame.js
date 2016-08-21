function play() {
  this.player_hand = [];
}

play.prototype.receiveCards = function(card_one, card_two) {
  this.player_hand.push(card_one);
  this.player_hand.push(card_two);
};
