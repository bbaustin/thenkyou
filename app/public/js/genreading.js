// ../go/..
// Generate attributes of reading selections.

$('#vocab-box').css("border-right-color", $('#jpn').css('borderColor'));
$('#vocab-box').css("border-left-color", $('#eng').css('borderColor'));


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

    var status = "English";
    $('#eng').click(function() {
      status = "English";
      console.log(status)
    })
    $('#ger').click(function() {
      status = "Deutsch";
      console.log(status)
    })  
    $('#jpn').click(function() {
      status = "日本語";
      console.log(status)
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

        ////\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ ENGLISH READINGS 
        if (status === "English") {  // language of vocabulary
          if ($('#myLang').text() === "English") {  // language of paragraph
            for (var r = 0; r < response.length; r++) {
              if (this.innerHTML === response[r].word_eng) {
                console.log(this.innerHTML)
                $('#vocab-box').html('<h2>' + response[r].word_eng + '</h2><p>' + response[r].def_eng + '</p><p><em>' + response[r].usage_eng + '</em></p>'); // work here
              }
            }
          }  
          else if ($('#myLang').text() === "Deutsch") {  // language of paragraph
            for (var r = 0; r < response.length; r++) {
              if (this.innerHTML === response[r].word_ger) {
                console.log(this.innerHTML)
                $('#vocab-box').html('<h2>' + response[r].word_eng + '</h2><p>' + response[r].def_eng + '</p><p><em>' + response[r].usage_eng + '</em></p>'); // work here
              }
            }
          }
          else if ($('#myLang').text() === "日本語") {  // language of paragraph
            for (var r = 0; r < response.length; r++) {
              if ((this.innerHTML === response[r].word_jpn_k) || (this.innerHTML === response[r].word_jpn_f))  {
                console.log(this.innerHTML)
                $('#vocab-box').html('<h2>' + response[r].word_eng + '</h2><p>' + response[r].def_eng + '</p><p><em>' + response[r].usage_eng + '</em></p>'); // work here
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
                $('#vocab-box').html('<h2>' + response[r].word_ger + '</h2><p>' + response[r].def_ger + '</p><p><em>' + response[r].usage_ger + '</em></p>'); // work here
              }
            }
          }  
          else if ($('#myLang').text() === "Deutsch") {  // language of paragraph
            for (var r = 0; r < response.length; r++) {
              if (this.innerHTML === response[r].word_ger) {
                console.log(this.innerHTML)
                $('#vocab-box').html('<h2>' + response[r].word_ger + '</h2><p>' + response[r].def_ger + '</p><p><em>' + response[r].usage_ger + '</em></p>'); // work here
              }
            }
          }
          else if ($('#myLang').text() === "日本語") {  // language of paragraph
            for (var r = 0; r < response.length; r++) {
              if ((this.innerHTML === response[r].word_jpn_k) || (this.innerHTML === response[r].word_jpn_f)) {
                console.log(this.innerHTML)
                $('#vocab-box').html('<h2>' + response[r].word_ger + '</h2><p>' + response[r].def_ger + '</p><p><em>' + response[r].usage_ger + '</em></p>'); // work here
              }
            }
          }
        }


        ////\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ JAPANESE READINGS 
        ///// HAVE TO ADD STUFF FOR KANJI VS FURIGANA IN LAST LINE OF EACH IF..ELSE
        else if (status === "日本語") {  // language of vocabulary
          if ($('#myLang').text() === "English") {  // language of paragraph
            for (var r = 0; r < response.length; r++) {
              if (this.innerHTML === response[r].word_eng) {
                console.log(this.innerHTML)
                //////// look ! this is what you need
                // if (response[r].word_jpn_k) <--- just check if there is a kanji. if so do layout1. otherwise, do layout2. 
                $('#vocab-box').html('<h2>' + response[r].word_jpn_f + '</h2><p>' + response[r].def_jpn + '</p><p><em>' + response[r].usage_jpn + '</em></p>'); // work here
              }
            }
          }  
          else if ($('#myLang').text() === "Deutsch") {  // language of paragraph
            for (var r = 0; r < response.length; r++) {
              if (this.innerHTML === response[r].word_ger) {
                console.log(this.innerHTML)
                $('#vocab-box').html('<h2>' + response[r].word_jpn_f + '</h2><p>' + response[r].def_jpn + '</p><p><em>' + response[r].usage_jpn + '</em></p>'); // work here
              }
            }
          }
          else if ($('#myLang').text() === "日本語") {  // language of paragraph
            for (var r = 0; r < response.length; r++) {
              if ((this.innerHTML === response[r].word_jpn_k) || (this.innerHTML === response[r].word_jpn_f)) {
                console.log(this.innerHTML)
                $('#vocab-box').html('<h2>' + response[r].word_jpn_f + '</h2><p>' + response[r].def_jpn + '</p><p><em>' + response[r].usage_jpn + '</em></p>'); // work here
              }
            }
          }
        }
      })
    

      // for (var r = 0; r < response.length; r++) {
      //   if ((this.innerHTML === response[r].word_jpn_f) || (this.innerHTML === response[r].word_jpn_k)) {
      //     console.log(response[r].id);
      //     $('#vocab-box').html('<h2>' + response[r].word_eng + '</h2><p>' + response[r].def_eng + '</p><p><em>' + response[r].usage_eng + '</em></p>'); // work here
      //   }
      // }

/////////// if you fix this, change the id of nl to something else, both here and in your reading.erb. It's being affected in genreading.js as is. 
      /////// checking for NL session. This would be a cool feature, 
      /////// but might require some serious debugging. Put off until
      /////// everything else is working better :>
      // if (nl === "English") {
      //   for (var r = 0; r < response.length; r++) {
      //     $('#vocab-box').html('<h2>' + this.word_eng + '</h2><p>' + response[r].def_eng + '</p><p><em>' + response[r].usage_eng + '</em></p>'); // work here
      //   }
      // }
      // else if (nl === "Deutsch") {
      //   for (var r = 0; r < response.length; r++) {
      //     $('#vocab-box').html('<h2>' + response[r].word_ger + '</h2><p>' + response[r].def_ger + '</p><p><em>' + response[r].usage_ger + '</em></p>'); // work here
      //   }
      // }
      // else if (nl === "日本語") {
      //   if (this.innerHTML === response[r].word_eng){
      //     for (var r = 0; r < response.length; r++) {
      //       // add testing here for IF KANJI, KANJI GETS H2 and FURIGANA GETS SMALL, OTHERWISE FURIGANA GETS H2
      //       $('#vocab-box').html('<h2>' + response[r].word_jpn_f + '</h2><p>' + response[r].def_jpn_f + '</p><p><em>' + response[r].usage_jpn_f + '</em></p>'); // work here
      //     }
      //   }
      // }
  },
  error: function(error) {
    console.log("error: " + error);
  }
});

