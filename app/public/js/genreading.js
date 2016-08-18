// ../go/..
// Generate attributes of reading selections.

$('#vocab-box').css("border-right-color", $('#jpn').css('borderColor'));
$('#vocab-box').css("border-left-color", $('#eng').css('borderColor'));
$("#eng").css('backgroundColor', $('#eng').css('borderColor'));
    var vocabClickCounter = 0;



var combining = function(splitArray) {
  for (var i = 0; i < splitArray.length; i += 2) {
    var stringWithClass = splitArray[i].join(splitArray[i + 1]); 
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
        console.log(reg_en);
        strArr.push(content.split(reg_en)); 
        strArr.push(['<span class="vocab">' + vocab[i].word_ger + '</span>']); 
        content = combining(strArr);
      }
    }    
    else if ($("#myLang").text() === "日本語") {
      var reg_jpn_k = new RegExp('\\b' + vocab[i].word_jpn_k + '\\b');
      var reg_jpn_f = new RegExp('\\b' + vocab[i].word_jpn_f + '\\b');
      if (content.indexOf(vocab[i].word_jpn_k) !== -1) {
        console.log(strArr);
        strArr.push(content.split(vocab[i].word_jpn_k)); 
        strArr.push(['<span class="vocab">' + vocab[i].word_jpn_k + '</span>']); 
        content = combining(strArr);
      }
      else if (content.indexOf(vocab[i].word_jpn_f) !== -1) { // !=== -1?
        console.log(strArr);
        strArr.push(content.split(vocab[i].word_jpn_f)); 
        strArr.push(['<span class="vocab">' + vocab[i].word_jpn_f + '</span>']); 
        content = combining(strArr);
      }
    }
  }
  return strArr;
};

    var status = "English";
    $('#eng').click(function() {
      status = "English";
      if (vocabClickCounter === 0) {
        $('#vocab-box').html("<h2>Click a vocab to get more info!</h2>");
      } 
    })
    $('#ger').click(function() {
      status = "Deutsch";
      if (vocabClickCounter === 0) {
        $('#vocab-box').html("<h2>Um weitere Auskunft, klicken Sie eine Vokab!</h2>");
      } 
    })  
    $('#jpn').click(function() {
      status = "日本語";
      if (vocabClickCounter === 0) {
        $('#vocab-box').html("<h2>単語をクリックする<br/>と訳が見れます！</h2>");
      } 
    })

var nl = $("#nl").text(); 
var myId   = parseInt($("#myId").text());
$.ajax({
  url: '/go/' + myId, // dynamic url
  type: 'post',
  dataType: 'json',
  success: function(response) {
    console.log(response)
    var showParagraph = combining(splitting(response, $("#reading-main").text()));
    $("#reading-main").html(showParagraph);
    
    console.log(response); // showing up with random stuff if no vocab found. 

  // clicking vocabs
  // language option; in lieu of using NL session data (see below)
    $('.vocab').click(function() {
      console.log(status);
      vocabClickCounter++;
      console.log(vocabClickCounter);
        ////\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ ENGLISH READINGS 
        if (status === "English") {  // language of vocabulary
          if ($('#myLang').text() === "English") {  // language of paragraph
            for (var r = 0; r < response.length; r++) {
              if (this.innerHTML === response[r].word_eng) {
                console.log(this.innerHTML)
                $('#vocab-box').html('<h2>' + response[r].word_eng + '</h2><p>' + response[r].def_eng + '</p><p><em>' + response[r].usage_eng + '</em></p>');
              }
            }
          }  
          else if ($('#myLang').text() === "Deutsch") {  // language of paragraph
            for (var r = 0; r < response.length; r++) {
              if (this.innerHTML === response[r].word_ger) {
                console.log(this.innerHTML)
                $('#vocab-box').html('<h2>' + response[r].word_eng + '</h2><p>' + response[r].def_eng + '</p><p><em>' + response[r].usage_eng + '</em></p>');
              }
            }
          }
          else if ($('#myLang').text() === "日本語") {  // language of paragraph
            for (var r = 0; r < response.length; r++) {
              if ((this.innerHTML === response[r].word_jpn_k) || (this.innerHTML === response[r].word_jpn_f))  {
                console.log(this.innerHTML)
                $('#vocab-box').html('<h2>' + response[r].word_eng + '</h2><p>' + response[r].def_eng + '</p><p><em>' + response[r].usage_eng + '</em></p>');
              }
            }
          }
        }

        ////\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ Deutsch READINGS 
        else if (status === "Deutsch") {  // language of vocabulary
          if ($('#myLang').text() === "English") {  // language of paragraph
            for (var r = 0; r < response.length; r++) {
              if (this.innerHTML === response[r].word_eng) {
                console.log(this.innerHTML)
                $('#vocab-box').html('<h2>' + response[r].word_ger + '</h2><p>' + response[r].def_ger + '</p><p><em>' + response[r].usage_ger + '</em></p>');
              }
            }
          }  
          else if ($('#myLang').text() === "Deutsch") {  // language of paragraph
            for (var r = 0; r < response.length; r++) {
              if (this.innerHTML === response[r].word_ger) {
                console.log(this.innerHTML)
                $('#vocab-box').html('<h2>' + response[r].word_ger + '</h2><p>' + response[r].def_ger + '</p><p><em>' + response[r].usage_ger + '</em></p>');
              }
            }
          }
          else if ($('#myLang').text() === "日本語") {  // language of paragraph
            for (var r = 0; r < response.length; r++) {
              if ((this.innerHTML === response[r].word_jpn_k) || (this.innerHTML === response[r].word_jpn_f)) {
                console.log(this.innerHTML)
                $('#vocab-box').html('<h2>' + response[r].word_ger + '</h2><p>' + response[r].def_ger + '</p><p><em>' + response[r].usage_ger + '</em></p>');
              }
            }
          }
        }


        ////\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ JAPANESE READINGS 
        ///// HAVE TO ADD STUFF FOR KANJI VS FURIGANA IN LAST LINE OF EACH IF..ELSE
        else if (status === "日本語") {  
          if ($('#myLang').text() === "English") {
            for (var r = 0; r < response.length; r++) {
              if (this.innerHTML === response[r].word_eng) {
                if (response[r].word_jpn_k) {
                  $('#vocab-box').html('<h2>' + response[r].word_jpn_k + '</h2><p><small>' + response[r].word_jpn_f + '</small><p>' + response[r].def_jpn + '</p><p><em>' + response[r].usage_jpn + '</em></p>');
                }
                else if (response[r].word_jpn_f) {
                  $('#vocab-box').html('<h2>' + response[r].word_jpn_f + '</h2><p>' + response[r].def_jpn + '</p><p><em>' + response[r].usage_jpn + '</em></p>'); 
                }
              }
            }
          }   
        else if ($('#myLang').text() === "Deutsch") {  // language of paragraph
            for (var r = 0; r < response.length; r++) {
              if (this.innerHTML === response[r].word_ger) {
                if (response[r].word_jpn_k) {
                  $('#vocab-box').html('<h2>' + response[r].word_jpn_k + '</h2><p><small>' + response[r].word_jpn_f + '</small><p>' + response[r].def_jpn + '</p><p><em>' + response[r].usage_jpn + '</em></p>');
                }
                else if (response[r].word_jpn_f) {
                  $('#vocab-box').html('<h2>' + response[r].word_jpn_f + '</h2><p>' + response[r].def_jpn + '</p><p><em>' + response[r].usage_jpn + '</em></p>'); 
                }
              }
            }
          }
        else if ($('#myLang').text() === "日本語") {  // language of paragraph
          for (var r = 0; r < response.length; r++) {
            if (this.innerHTML === response[r].word_jpn_k){ 
            // if (response[r].word_jpn_k) {
              $('#vocab-box').html('<h2>' + response[r].word_jpn_k + '</h2><p><small>' + response[r].word_jpn_f + '</small><p>' + response[r].def_jpn + '</p><p><em>' + response[r].usage_jpn + '</em></p>');
            }
            else if (this.innerHTML === response[r].word_jpn_f) {
              $('#vocab-box').html('<h2>' + response[r].word_jpn_f + '</h2><p>' + response[r].def_jpn + '</p><p><em>' + response[r].usage_jpn + '</em></p>'); 
            }
          }
        }
      }
    })
  },
  error: function(error) {
    console.log("error: " + error);
  }
});

