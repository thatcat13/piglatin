//Backend Logic
var toPigLatin = function(sentence) {
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  var splitSentence = sentence.split("");
  // var qu = "qu";
  // var squ = "squ";


  if(vowels.includes(sentence.charAt(0))){
    return sentence += "way";
  } else {
    for(var i = 0; i < sentence.length; i++) {
      if(!vowels.includes(sentence.charAt(i))) {
        splitSentence.push(splitSentence.shift());
        console.log(splitSentence);
        
        //This is the code that tests "Q" and "U"
        if ((sentence.charAt(0) === "s") && (sentence.charAt(1) === "q") && (sentence.charAt(2) === "u")) {
          console.log(splitSentence);
          splitSentence.push(splitSentence.shift());
          console.log(splitSentence);
        }
        else if ((sentence.charAt(0) === "q") && (sentence.charAt(1) === "u")) {
          console.log(splitSentence);
          splitSentence.push(splitSentence.shift());
          console.log(splitSentence);
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
