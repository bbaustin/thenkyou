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
    if ($("#myLang").text() === "English") {
      var reg_en = new RegExp('\\b' + vocab[i].word_eng + '\\b');
      if (content.indexOf(vocab[i].word_eng) !== -1) { // !=== -1?
        console.log('hey');
        console.log(reg_en);
        strArr.push(content.split(reg_en)); 
        strArr.push(['<span class="vocab">' + vocab[i].word_eng + '</span>']); 
        content = combining(strArr);
        // $('ul').append('<li>' + vocab[i].word_eng + '</li>'); 
      }
    }
    else if ($("#myLang").text() === "Deutsch") {
      var reg_en = new RegExp('\\b' + vocab[i].word_ger + '\\b');
      if (content.indexOf(vocab[i].word_ger) !== -1) { // !=== -1?
        console.log('hey');
        console.log(reg_en);
        strArr.push(content.split(reg_en)); 
        strArr.push(['<span class="vocab">' + vocab[i].word_ger + '</span>']); 
        content = combining(strArr);
        // $('ul').append('<li>' + vocab[i].word_ger + '</li>'); 
      }
    }    
    else if ($("#myLang").text() === "日本語") {
      var reg_jpn_k = new RegExp('\\b' + vocab[i].word_jpn_k + '\\b');
      var reg_jpn_f = new RegExp('\\b' + vocab[i].word_jpn_f + '\\b');
      if (content.indexOf(vocab[i].word_jpn_k) !== -1) {
        strArr.push(content.split(vocab[i].word_jpn_k)); 
        strArr.push(['<span class="vocab">' + vocab[i].word_jpn_k + '</span>']); 
        content = combining(strArr);
        // $('ul').append('<li>' + vocab[i].word_jpn_k + '</li>');        
      }
      else if (content.indexOf(vocab[i].word_jpn_f) !== -1) { // !=== -1?
        strArr.push(content.split(vocab[i].word_jpn_f)); 
        strArr.push(['<span class="vocab">' + vocab[i].word_jpn_f + '</span>']); 
        content = combining(strArr);
        // $('ul').append('<li>' + vocab[i].word_jpn_f + '</li>'); 
      }
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
    console.log(response)
    var showParagraph = combining(splitting(response, $("#reading-main").text()));
    $("#reading-main").html(showParagraph);
    
    console.log(response); // showing up with random stuff if no vocab found. 

    $('.vocab').click(function() {
      console.log(this.innerHTML);
      for (var r = 0; r < response.length; r++) {
        if ((this.innerHTML === response[r].word_jpn_f) || (this.innerHTML === response[r].word_jpn_k)) {
          console.log(response[r].id);
          $('#vocab-box').html('<h2>' + response[r].word_eng + '</h2><p>' + response[r].def_eng + '</p><p><em>' + response[r].usage_eng + '</em></p>'); // work here
        }
      }
    })



  },
  error: function(error) {
    console.log("error: " + error);
  }
});

