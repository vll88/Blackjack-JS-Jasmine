"use strict";

class Cards{
  constructor(suit, value){
    this.suit = suit;
    this.value = value;
  }
}

class Deck{
  constructor(){
    //var newDeck = new Cards();
    this.playingCards = [];
  }
  createDeck(){
    for(var i=1; i<=4; i++){
      for(var j=1; j<=13; j++){
        this.playingCards.push(new Cards(i,j));
      }
    }
  }
  getPlayingCards(){
    return this.playingCards;
  }
}

class CardGames{
  constructor(){
  this.name="Card Games";
  }
  getName(){
    return this.name;
  }
}

class Blackjack extends CardGames{
  constructor(){
    super();
      this.name="Blackjack";
    }
}
/////////////////////////Main////////////////////////////
var myExDeck = new Deck;
myExDeck.createDeck();
console.log(myExDeck.getPlayingCards());
