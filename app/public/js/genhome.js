$.ajax({
  url: '/',
  type: 'post',
  dataType: 'json',
  success: function(response) {
    debugger;
    console.log(typeof response);
    console.log(response);
    $('.button_container').append(response[0], response[1], response[5]);
    debugger;
    var colorList = ["#FD8D8D", "#FFB148", "#FFD60E", "#7CE938", "#52BFFF", "#E2B4F9", "#979797"];
    var reading_buttons = document.getElementsByClassName('reading_button');
      for (var i = 0; i < reading_buttons.length; i++) {
        var r = parseInt(Math.random() * 6);
        reading_buttons[i].style.background = colorList[r];
      }  
  },
  error: function(error) {
    console.log("error: " + error);
  }
});
