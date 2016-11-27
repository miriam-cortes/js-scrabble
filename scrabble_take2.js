var Scrabble = function() {}

Scrabble.prototype.score = function (word) {
  if ( word.length > 7 ) {
    return console.log("That word is too long for a real scrabble round. You've been Scrabbled!");
  }
  var wordPoints = 0
  var parseWord = function(word) {
    return wordAsArray = word.toLowerCase().split('');
  }

  if ( word.length == 7 ) {
    wordPoints += 50
  }

  parseWord(word).forEach( function(letter) {
    if( ["a","e","i","o","u","l","n","r","s","t"].indexOf( letter ) != -1 ) {
      wordPoints += 1;
    } else if ( ["d","g"].indexOf( letter ) != -1 ) {
      wordPoints += 2;
    } else if ( ["b","c","m","p"].indexOf( letter ) != -1 ) {
      wordPoints += 3;
    } else if ( ["f","h","v","w","y"].indexOf( letter ) != -1 ) {
      wordPoints += 4;
    } else if ( ["k"].indexOf( letter ) != -1 ) {
      wordPoints += 5
    } else if ( ["j","x"].indexOf( letter ) != -1 ) {
      wordPoints += 8;
    } else if ( ["q","z"].indexOf( letter ) != -1 ) {
      wordPoints += 10;
    } else {
      return console.log("idk! that's not a letter...wtf??");
    }
  });

  return wordPoints
};

Scrabble.prototype.highestScoreFrom = function (arrayOfWords) {
  max = 0
  maxWord = ""
  arrayOfWords.forEach( function(word) {
    currentWordScore = Scrabble.prototype.score(word)
    if ( currentWordScore > max ) {
      max = currentWordScore
      max_word = word
    } else if ( currentWordScore == max ) {
      if ( word.length < max_word.length ) {
        max_word = word
      }
    }
  })
  return max_word
};


///////// TESTING STUFF OUT /////////
// var newGame = new Scrabble()
// // returns the total score value for the given word. The word is input as a string (case insensitive).
// console.log(newGame.score("poop")); //8
// console.log(newGame.score("fuzz")); //25
// console.log(newGame.score("guzzle")); //25
// //if the top score is tied between multiple words, pick the one with the fewest letters.
// console.log(newGame.highestScoreFrom(["poop", "fuzz","guzzle"])); //fuzz
// //If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles.
// console.log(newGame.highestScoreFrom(["poop", "fuzz","jimjams"])); // jimjams
// //If the there are multiple words that are the same score and same length, pick the first one in supplied list.
// console.log(newGame.highestScoreFrom(["jibb", "jauk","jamb"])); // jibb


var Player = function(playerName) {
  this.playerName = playerName
  this.won = false
  this.arrayOfWords = []
  this.playerTotalScore = 0
}

Player.prototype.name = function () {
  return this.playerName
};

Player.prototype.plays = function () {
  return this.arrayOfWords
};

Player.prototype.play = function (word) {
  if ( this.won ) { return false }

  return this.arrayOfWords.push(word)
};

Player.prototype.totalScore = function () {
  for ( var i=0; i<this.arrayOfWords.length; i++ ) {
    thisWordsScore = ( new Scrabble() ).score(this.arrayOfWords[i])
    this.playerTotalScore += thisWordsScore
  }
  return this.playerTotalScore
};


var miriam = new Player("Miriam")
// name: property which returns the value of the player's name
console.log(miriam.name()); //Miriam
// plays: property which returns an Array of the words played by the player
console.log(miriam.plays()); //[]
// play(word): Function which adds the input word to the plays Array
console.log(miriam.play("poop")); //1
console.log(miriam.play("words")); //2
console.log(miriam.play("jibb")); //3
console.log(miriam.plays()); //["poop","words","jibb"]
// totalScore(): Function which sums up and returns the score of the players words
console.log(miriam.totalScore()); //32
// hasWon(): Function which returns true if the player has over 100 points, otherwise returns false

// highestScoringWord(): Function which returns the highest scoring word the user has played

// highestWordScore(): Function which returns the highestScoringWord score
