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
    if (content.indexOf(vocab[i].word_eng) !== -1) { // NEW!!!!! FOR ENGLISH 
      strArr.push(content.split(vocab[i].word_eng)); 
      strArr.push(['<span class="vocab">' + vocab[i].word_eng + '</span>']); 
      content = combining(strArr);
      $('#vocab-box').append('<ul>' + vocab[i].word_eng + '</ul>');
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
    $("#reading-main").html(showParagraph);
    
    console.log(response); // showing up with random stuff if no vocab found. 

    $('.vocab').click(function() {
      console.log(this.innerHTML);
      for (var r = 0; r < response.length; r++) {
        if (this.innerHTML === response[r].word_eng) {
          console.log(response[r].id);
          $('#vocab-box').html('<button class="vocab-return">back</button><ul> <li>' + response[r].word_jpn_f + '</li><li>anotherthing</li></ul>');
        }
      }
    })



  },
  error: function(error) {
    console.log("error: " + error);
  }
});

    $('.vocab-return').click(function() {
      console.log('hey');
      // don't know why this doesn't work but it's not extremely important
      // $('#vocab-box').html('<ul>');
      // for (var r = 0; r < response.length; r++) { 
      //   $('#vocab-box').append('<li>' + response[r] + '</li>');
      // }
      // $('#vocab-box').append('</ul>');     
    })
