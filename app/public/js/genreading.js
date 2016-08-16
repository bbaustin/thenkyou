// ../go/..
// Generate attributes of reading selections.


var combining = function(splitArray) {
  for (var i = 0; i < splitArray.length; i+=2) {
    var stringWithClass = splitArray[i].join(splitArray[i+1]);  
    }
    return stringWithClass;
};

var splitting = function(vocab, content) {
  var strArr = [];
  for (var i = 0; i < vocab.length; i++){
    if (content.indexOf(vocab[i].wordLang1) !== -1) { // NEW!!!!! FOR ENGLISH 
      strArr.push(content.split(vocab[i].wordLang1)); //adds everything but vocabs
      strArr.push(['<a class="vocab" href="#">' + vocab[i].wordLang1 + '</a>']); //adds vocabs [with style]
      content = combining(strArr);
      $('#vocab-box').append('<ul>' + vocab[i].wordLang1 + '</ul>');
    }
  }
  return strArr;
};



var myId = parseInt($("#myId").text());
$.ajax({
  url: '/go/' + myId, // dynamic url
  type: 'post',
  dataType: 'json',
  success: function(response) {
    var showParagraph = combining(splitting(response, $("#reading-main").text()));
    console.log(showParagraph);
    $("#reading-main").html(showParagraph);

    var addedVocabs = $('.vocab');
    for (var i = 0; i < addedVocabs.length; i++) {
      console.log(addedVocabs[i]);
      $(addedVocabs[i]).click(function() {
        console.log(this);
      });
    }
  },
  error: function(error) {
    console.log("error: " + error);
  }
});

// fix dis VVVVVVV



