/*
function getUserInput(){
  var userInput=prompt("Would you like to play a card game? Yes or No?");
  }
*/
class cardGames{
  //put user info in re game in here into conditional
  constructor(){
  this.name="Card Games";
  this.suit={a:"Spades",b:"Hearts",c:"Diamonds",d:"Clubs"};
  //this.suit=["Spades","Hearts","Diamonds","Clubs"];
  //J,Q,K=14-16; Right now: 1 and 11 is Ace
  this.cardNum=[1,2,3,4,5,6,7,8,9,10,11,12,13];
  //console.log("creating card games");
  }

getRandInt(){
  return Math.floor((Math.random()*16)+1);
  }

getRandSuit(){
  return Math.floor((Math.random()*4)+1);
  }

getName(){
  return this.name;
}

getNumber(){
  return this.cardNum;
  }

getSuit(){
    return this.suit;
  }
}

/*
interface Dealer{
  function deal();
}
*/
class CardDeck{
  constructor(){
    var newGame = new cardGames();
    var playingCards = [];
  }
  //generate 52 card
  for(var i=0; i<=newGame.suit.length; i++){
    for(var j=i; j<=newGame.cardNum.length; j++){
      playingCards.push(i+j);
    }
  }
}

class Blackjack extends cardGames{
  //this.implementsInterfaces = ['Dealer'];
  constructor(){
    super();
      this.name="Blackjack";
      //console.log("creating Blackjack");
  }
}


//getUserInput();
var myCards=new cardGames();
console.log(myCards.getName());
console.log(myCards.getNumber());
console.log(myCards.getSuit());
var myBlackjack=new Blackjack();
console.log(myBlackjack.getName());
console.log(myBlackjack.getNumber());
console.log(myBlackjack.getSuit());
console.log(myBlackjack.getRandInt());
console.log(myBlackjack.getRandSuit());
