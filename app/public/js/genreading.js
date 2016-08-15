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
  console.log(vocab.length);
  console.log(vocab);
  console.log(typeof vocab);
  console.log(content);
  console.log(typeof content);
  for (var i = 0; i < vocab.length; i++){
    if (content.indexOf(vocab[i].wordLang1) !== -1) { // NEW!!!!! FOR ENGLISH 
      strArr.push(content.split(vocab[i].wordLang1)); //adds everything but vocabs
      strArr.push(['<span class="vocab">' + vocab[i].wordLang1 + '</span>']); //adds vocabs [with style]
      content = combining(strArr);
      $('#vocab-box').append('<ul>' + vocab[i].wordLang1 + '</ul>');

    }

  }
  return strArr;
};



var myId = parseInt($("#myId").text())

$.ajax({
  url: '/go/' + myId, // dynamic url
  type: 'post',
  dataType: 'json',
  success: function(response) {
    console.log(typeof response);
    console.log(response);
    console.log("new response");
    var showParagraph = combining(splitting(response, $("#reading-main").text()));
    console.log(showParagraph);
    $("#reading-main").html(showParagraph);
  },
  error: function(error) {
    console.log("error: " + error);
  }
});

// fix dis VVVVVVV 
var vocabs = document.getElementsByClassName('vocab');
for (var i = 0; i < vocabs.length; i++) {
  $(vocabs[i]).text().click(function() {
    $('#vocab-box').append(this.wordLang1);
    $('#vocab-box').append(this.wordLang3);
    console.log('hey!');
  })
}

