console.log('main.js is loaded');

function genColor () {
  var colorList = ["#FD8D8D", "#FFB148", "#FFD60E", "#7CE938", "#52BFFF", "#E2B4F9", "#979797"];
  // var r = parseInt(Math.random() * 6);
  var buttons = document.getElementsByClassName('langButton');
  var vocabs  = document.getElementsByClassName('vocab');
  var inputs  = document.getElementsByClassName('input');

  for (var i = 0; i < buttons.length; i++){
  	var r = parseInt(Math.random() * 6);
  	buttons[i].style.borderColor = colorList[r];
  }
  for (var i = 0; i < inputs.length; i++) {
    var r = parseInt(Math.random() * 6);
    inputs[i].style.borderColor = colorList[r];
  }
  for (var i = 0; i < vocabs.length; i++) {
  	console.log(vocabs[i]);
  	var r = parseInt(Math.random() * 6);
  	vocabs[i].style.color = colorList[r];
  }

}
genColor();


// lang stuff... eventualyl with cookies? 
var chooser = "English";

$("#eng").click(function() {
  chooser = "English";
  $("h1").html("thenkyou");
})

$("#jpn").click(function() {
  chooser = "日本語";
  $("h1").html('テェンキョウ');
  $(this).css({'backgroundColor':'this.borderColor'});
})

// to genreading
  // $.ajax({
  //   url: '/go/', // dynamic url. how? 
  //   type: 'post',
  //   dataType: 'json',
  //   success: function(response) {
  //     console.log(typeof response);
  //     console.log(response);
  //     console.log("new response");
  //   },
  //   error: function(error) {
  //     console.log("error: " + error);
  //   }
  // });


// to gengo 
  // $.ajax({
  //   url: '/go',
  //   type: 'post',
  //   dataType: 'json',
  //   success: function(response) {
  //     console.log(typeof response);
  //     console.log(response);
  //     for (var i = 0; i < response.length; i++) {
  //       $('ul').append('<li>' + response[i] + '</li>');
  //     } 
  //   },
  //   error: function(error) {
  //     console.log("error: " + error);
  //   }
  // });



