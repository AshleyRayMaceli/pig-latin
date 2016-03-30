var pigLatin = function(phrase) {
  for (var i = 0; i <= phrase.length; i += 1) {
     if (phrase[i].toUpperCase() === ("A") || phrase[i].toUpperCase() === ("E") || phrase[i].toUpperCase() === ("I") || phrase[i].toUpperCase() === ("O") || phrase[i].toUpperCase() === ("U") || phrase[i].toUpperCase() === ("Y")) {
       return (phrase.join("") + "ay");
    }
  }
};

$(document).ready(function() {
  $("form#pig-latin").submit(function(event){
    event.preventDefault();

    var phrase = $("input#phrase").val().split("");
    var result = pigLatin(phrase);

    $(".phrase").text(result);
    $(".originalPhrase").text(phrase);

    $("#result").show();
  });
});
