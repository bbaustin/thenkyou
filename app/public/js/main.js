
function genColor () {
  var colorList = ["#FD8D8D", "#FFB148", "#FFD60E", "#7CE938", "#52BFFF", "#E2B4F9", "#979797"];
  // var r = parseInt(Math.random() * 6);
  var buttons         = document.getElementsByClassName('langButton');
  var v_buttons       = document.getElementsByClassName('vocabButton');
  var vocabs          = document.getElementsByClassName('vocab');
  var inputs          = document.getElementsByClassName('input');
  var welcomes        = document.getElementsByClassName('welcome');



  for (var i = 0; i < welcomes.length; i++){
    var r = parseInt(Math.random() * 6);
    welcomes[i].style.color = colorList[r];
  }  
  for (var i = 0; i < buttons.length; i++){
  	var r = parseInt(Math.random() * 6);
  	buttons[i].style.borderColor = colorList[r];
  }
  for (var i = 0; i < v_buttons.length; i++){
    var r = parseInt(Math.random() * 6);
    v_buttons[i].style.borderColor = colorList[r];
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
  $("#nl").val("English");
  this.style.backgroundColor = this.style.borderColor;
  $("#jpn").css('backgroundColor', 'transparent');
  $("#ger").css('backgroundColor', 'transparent');  
})

$("#ger").click(function() {
  chooser = "Deutsch";
  this.style.backgroundColor = this.style.borderColor;
  $("#nl").val("Deutsch");
  $("h1").html("thenkyou");  
  $("#eng").css('backgroundColor', 'transparent');
  $("#jpn").css('backgroundColor', 'transparent');
})

$("#jpn").click(function() {
  chooser = "日本語";
  $("h1").html('テェンキョウ');
  this.style.backgroundColor = this.style.borderColor;
  $("#nl").val("日本語");
  $("#eng").css('backgroundColor', 'transparent');
  $("#ger").css('backgroundColor', 'transparent');
})

