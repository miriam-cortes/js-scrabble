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
var newGame = new Scrabble()
// returns the total score value for the given word. The word is input as a string (case insensitive).
console.log(newGame.score("poop")); //8
console.log(newGame.score("fuzz")); //25
console.log(newGame.score("guzzle")); //25
//if the top score is tied between multiple words, pick the one with the fewest letters.
console.log(newGame.highestScoreFrom(["poop", "fuzz","guzzle"])); //fuzz
//If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles.
console.log(newGame.highestScoreFrom(["poop", "fuzz","jimjams"])); // jimjams
//If the there are multiple words that are the same score and same length, pick the first one in supplied list.
console.log(newGame.highestScoreFrom(["jibb", "jauk","jamb"])); // jibb
