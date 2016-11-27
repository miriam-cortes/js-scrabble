var Scrabble = function() {}

// Scrabble.prototype.letterPoints = function(letter) {
//
// }

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

  return console.log(wordPoints);
};

var newGame = new Scrabble()
// console.log(newGame.parseWord('poop'));
console.log(newGame.score("poop"));
