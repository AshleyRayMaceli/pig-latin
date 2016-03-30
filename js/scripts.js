var vowels = ["a", "e", "i", "o", "u", "y"];

var vowelCheck = function(letter) {
  for (var i = 0; i < vowels.length; i ++) {
      if (letter == vowels[i]) {
        return true;
      }
    }
    return false;
  }

var makeWord = function(string) {
  if (vowelCheck(string[0]) && string[0] !== "y") {
    return (string + "ay");
  } else {
    for (var letter = 1; letter < string.length; letter ++) {
      if (vowelCheck(string[letter])) {
        if (string[letter] === "u" && (string[letter -1]) === "q") {
          var front = string.slice(0, letter +1);
          var middle = string.slice(letter +1, string.length);
          return middle + front + "ay";
        } else {
          var front = string.slice(0, letter);
          var middle = string.slice(letter, string.length);
          return middle + front + "ay";
        }
      }
    }
  }
}

var translate = function(phrase) {
  var newPhrase = [];
  wordArray = phrase.split(" ");
  for (var word = 0; word < wordArray.length; word ++) {
    newPhrase.push(makeWord(wordArray[word]));
  }
  return newPhrase.join(" ");
}

$(document).ready(function() {
  $("form#pig-latin").submit(function(event){
    event.preventDefault();

    var phrase = $("input#phrase").val().toLowerCase();
    var originalPhrase = $("input#phrase").val();
    var result = translate(phrase);

    $(".phrase").text(result);
    $(".originalPhrase").text(originalPhrase);
    $("#result").show();
  });
});
