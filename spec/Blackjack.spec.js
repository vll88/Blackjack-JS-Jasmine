/*
function getUserInput(){
  var userInput=prompt("Would you like to play a card game? Yes or No?");
  }
*/
class cardGames{
  //put user info in re game in here into conditional
  constructor(){
  this.name="Card Games";
  this.suit=["Spades","Hearts","Diamonds","Clubs"];
  //J,Q,K=14-16; Right now: 1 and 11 is Ace
  this.cardNum=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
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



////////////////Tests////////////////////////////
//run in console

describe('Tests cardGames class',function(){

  var playingCardGames = new cardGames();

  it('should create CardGames',function(){
    //console.log(playingCardGames);
    expect(playingCardGames).toBeDefined();
    expect(playingCardGames).not.toBeNull();
  });
});

describe('Tests Blackjack class',function(){

  var playingBlackjack = new Blackjack();

  it('should create Blackjack',function(){
    //console.log(playingCardGames);
    expect(playingBlackjack).toBeDefined();
    expect(playingBlackjack).not.toBeNull();
  });
});

describe('Tests random int', function(){

  var playingCardGames = new cardGames();

  it('should give a rand int 1-16', function(){
    expect(playingCardGames.getRandInt()).toBeLessThan(17);
  });
});

describe('Tests random suit', function(){

  var playingCardGames = new cardGames();

  it('should give a rand int 1-4', function(){
    expect(playingCardGames.getRandSuit()).not.toBeGreaterThan(4);
  });
});

////////////////////////////////////////////////
