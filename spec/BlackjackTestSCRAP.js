////////////////Tests////////////////////////////

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
