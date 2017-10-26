//Backend Logic
var toPigLatin = function(sentence) {
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  var splitSentence = sentence.split(""); // turns input into an array

  if(vowels.includes(sentence.charAt(0))){
    return sentence += "way"; //adds "way" to words beginning with vowel
  } else {
    for(var i = 0; i < sentence.length; i++) { //for loop iterates through parameter starting at zeroth position and up to sentence length
      if(!vowels.includes(sentence.charAt(i))) {
        splitSentence.push(splitSentence.shift()); //using for-loop, if there are no vowels at position i, it pushes to the end of the sentence the very letter that was shifted out (shifted = takes a letter away at a given position )

        //This is the code that tests "Q" and "U"
        if ((sentence.charAt(0) === "s") && (sentence.charAt(1) === "q") && (sentence.charAt(2) === "u")) {
          splitSentence.push(splitSentence.shift()); //this one doesn't work for us prolly because we're missing a test before this point
        }
        else if ((sentence.charAt(0) === "q") && (sentence.charAt(1) === "u")) {
          splitSentence.push(splitSentence.shift());
        }
      }
      else {
        splitSentence.push("ay");
        return splitSentence.join("");
      }
    }
  }
}

$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();
    var pigLatin = toPigLatin(userInput);
    $("#translated").text(pigLatin);
  });
});
