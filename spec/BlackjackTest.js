////////////////Tests////////////////////////////

describe('Tests Card class',function(){
  var newPlayingCard = new Cards();

  it('should create Cards object',function(){
    expect(newPlayingCard).toBeDefined();
    expect(newPlayingCard).not.toBeNull();
  });
});

describe('Tests Deck class',function(){
  var newPlayingDeck = new Deck();

  it('should create Deck object',function(){
    //console.log(playingCardGames);
    expect(newPlayingDeck).toBeDefined();
    expect(newPlayingDeck).not.toBeNull();
  });
});

describe('Tests Deck class array of cards',function(){
  var newPlayingDeck = new Deck();

  it('should create empty card array',function(){
    expect(newPlayingDeck.getPlayingCards()).toEqual([]);
  });
});

describe('Tests CardGames class',function(){
  var playingCards = new CardGames();

  it('should create card games',function(){
    //console.log(playingCardGames);
    expect(playingCards).toBeDefined();
    expect(playingCards).not.toBeNull();
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
/*
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
*/
////////////////////////////////////////////////
