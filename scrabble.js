var Scrabble = function(playerName) {
  this.playerName = playerName;
  this.totalScore = 0;
  console.log("Welcome, " + this.playerName + "! You have " + this.totalScore + " points." );
};

Scrabble.prototype.score = function(word) {
  console.log(this.playerName)
  console.log(this.totalScore)
  this.wordScore = 0;
  var onePointLetters = ["A","E","I","O","U","L","N","R","S","T"];
  var twoPointLetters = ["D","G"];
  var threePointLetters = ["B","C","M","P"];
  var fourPointLetters = ["F","H","V","W","Y"];
  var fivePointLetters = ["K"];
  var eightPointLetters = ["J","X"];
  var tenPointLetters = ["Q","Z"];
  this.word = word;

  if (this.word == "") {
    return console.log( this.word + " is not a word...??");
  };

  wordAsArray = word.toUpperCase().split('');

  // return console.log(wordAsArray);

  //go through word and add up points
  for (var i=0; i<word.length; i++) {
    if ( onePointLetters.indexOf(wordAsArray[i]) != -1) {
      this.wordScore++;
    } else if ( wordAsArray[i].indexOf(twoPointLetters) != -1) {
      this.wordScore += 2;
    } else if ( wordAsArray[i].indexOf(threePointLetters) != -1) {
      this.wordScore += 3;
    } else if ( wordAsArray[i].indexOf(fourPointLetters) != -1) {
      this.wordScore += 4;
    } else if ( wordAsArray[i].indexOf(fivePointLetters) != -1) {
      this.wordScore += 5;
    } else if ( wordAsArray[i].indexOf(eightPointLetters) != -1) {
      this.wordScore += 8;
    } else if ( wordAsArray[i].indexOf(onePointLetters) != -1) {
      this.wordScore += 10;
    } else {
      this.wordScore = 0;
      return console.log("That's not a word.");
    }
  }

  //50 bonus points for using all 7 letters
  if ( this.word.length == 7 ) {
    this.wordScore += 50;
  }
  console.log(this.totalScore);
  this.totalScore += this.wordScore;
  console.log(this.totalScore);
  return console.log( "The word " + this.word + " is worth " + this.wordScore + " points. Your score is now " + this.totalScore );
};

module.exports = Scrabble;

var Me = new Scrabble("Miriam");
// var blankWord = new Me.score("");
var firstWord = new Me.score("o");
