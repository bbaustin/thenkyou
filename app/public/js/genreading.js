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
  console.log(vocab);
  console.log(content);
  // var languageList = [vocab[i].word_eng, vocab[i].word_ger, vocab[i].word_jpn_k, vocab[i].word_jpn_f];
  for (var i = 0; i < vocab.length; i++) {
    //for (var l = 0; l < languageList.length; l++) {
      if (content.indexOf(vocab[i].word_eng) !== -1) { // !=== -1?
        strArr.push(content.split(vocab[i].word_eng)); 
        strArr.push(['<span class="vocab">' + vocab[i].word_eng + '</span>']); 
        content = combining(strArr);
        $('#vocab-box').append('<ul>' + vocab[i].word_jpn_k + '</ul>'); // take out later or fix
      }
      else if (content.indexOf(vocab[i].word_jpn_f) !== -1) { // !=== -1?
        strArr.push(content.split(vocab[i].word_jpn_f)); 
        strArr.push(['<span class="vocab">' + vocab[i].word_jpn_f + '</span>']); 
        content = combining(strArr);
        $('#vocab-box').append('<ul>' + vocab[i].word_jpn_f + '</ul>'); // take out later or fix
      }
    //}
  }
  return strArr;
};




var myId = parseInt($("#myId").text());
$.ajax({
  url: '/go/' + myId, // dynamic url
  type: 'post',
  dataType: 'json',
  success: function(response) {
    console.log(response)
    var showParagraph = combining(splitting(response, $("#reading-main").text()));
    $("#reading-main").html(showParagraph);
    
    console.log(response); // showing up with random stuff if no vocab found. 

    // $('.vocab').click(function() {
    //   console.log(this.innerHTML);
    //   for (var r = 0; r < response.length; r++) {
    //     if (this.innerHTML === response[r].word_eng) {
    //       console.log(response[r].id);
    //       $('#vocab-box').html('<ul> <li>' + response[r].word_eng + '</li></ul>'); // work here
    //     }
    //   }
    // })



  },
  error: function(error) {
    console.log("error: " + error);
  }
});

