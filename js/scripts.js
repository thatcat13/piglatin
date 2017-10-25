//Backend Logic
var toPigLatin = function(sentence) {
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  var splitSentence = sentence.split("");

  if(vowels.includes(sentence.charAt(0))){
    return sentence += "way";
  } else {
    for(var i = 0; i < sentence.length; i++) {
      if(!vowels.includes(sentence.charAt(i))) {
        splitSentence.push(splitSentence.shift());
      } else {
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
