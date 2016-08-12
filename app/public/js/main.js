console.log('main.js is loaded');

function genColor () {
  var colorList = ["#FD8D8D", "#FFB148", "#FFD60E", "#7CE938", "#52BFFF", "#E2B4F9", "#979797"];
  // var r = parseInt(Math.random() * 6);
  var buttons = document.getElementsByClassName('button');
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

$("#jpn").click(function() {
  $("h1").html('テェンキョウ');
})

$("#eng").click(function() {
  $("h1").html("thenkyou");
})

