var Scrabble = function() {
  parseWord = function(word) {
    this.word = word
    this.wordAsArray = this.word.toUpperCase().split('');
    return this.wordAsArray;
  },

  letterPoints = function(letter) {
    // this.wordScore = 0;
    if ( ["A","E","I","O","U","L","N","R","S","T"].indexOf(letter) != -1 ) {
      return 1;
    } else if ( ["D","G"].indexOf( letter ) != -1 ) {
      return 2;
    } else if ( ["B","C","M","P"].indexOf( letter ) != -1 ) {
      return 3;
    } else if ( ["F","H","V","W","Y"].indexOf( letter ) != -1 ) {
      return 4;
    } else if ( ["K"].indexOf( letter ) != -1 ) {
      return 5;
    } else if ( ["J","X"].indexOf( letter ) != -1 ) {
      return 8;
    } else if ( ["Q","Z"].indexOf( letter ) != -1 ) {
      return 10;
    } else {
      return console.log("idk! that's not a letter...wtf");
    }
  }
};

var ValidWordLength = function(word) {
  if (word == "") {
    console.log( "That's an empty string, dummy." );
    return false;
  } else if (word.length > 7) {
    console.log( word + " is too long for this game." );
    return false;
  } else {
    return true;
  };
};

Scrabble.prototype.score = function(word) {
  this.word = word;
  this.points = 0
  if ( ValidWordLength(this.word) ) {
    parseWord(this.word).forEach(function(letter) {
      this.points += letterPoints(letter);
    });
  }

  //50 bonus points for using all 7 letters
  if ( this.word.length == 7 ) {
    this.points += 50;
  }
  return this.points;
};

Scrabble.prototype.highestScoreFrom = function( array ) {
    var max = 0
    var maxWord = ""
    array.forEach ( function (word) {
      if ( score(word) > max ) {
        max = score(word)
        maxWord = word
      } else if ( score(word) == max ) {
        if ( word.length < maxWord.length ) {
          maxWord = word;
        }
      }
    });
    return maxWord
};

var Player = function(name) {
  Scrabble.call(this);
  this.name = name;
  this.plays = []; //if i'm defining the array here then why does it say it's undefined when I try to push it in??
  this.playerWon = false;
  this.totalScore = 0;
};

Player.prototype.play = function(word) {
    if ( this.playerWon ) {return console.log("You've already won. Why are you still playing??");}
    this.plays.push(word)
    return (new Scrabble()).score(word)
};

  // totalScore = function() {
  //   this.plays.forEach(function(word) {
  //     a = new Scrabble()[score(word)]
  //     this.totalScore += a
  //   });
  //   return this.totalScore
  // }
  //
  // hasWon = function() {
  //   this.playerWon = true if (this.totalScore > 100)
  //   return this.playerWon
  // }
  //
  // highestScoringWord = function() {
  //   return new Scrabble()[score(this.plays)]
  // }
  //
  // highestScoringWordScore = function() {
  //   return new Scrabble()[score(this.highestScoringWord)]
  // }
// };


module.exports = Scrabble;

var newGame = new Scrabble();
// newGame[score('')];
// newGame[score("one")]
console.log(newGame.score("poOp"));
// newGame[score("po&")]

var Miriam = new Player("Miriam");
console.log(Miriam.play("one"));
