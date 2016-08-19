$.ajax({
  url: '/',
  type: 'post',
  dataType: 'json',
  success: function(response) {
    console.log(typeof response);
    console.log(response);
    $('.button_container').append(response[0], response[1], response[5]);
    var colorList = ["rgba(253,141,141,.6)", "rgba(255,177,72,.6)", "rgba(255,214,14,.6)", "rgba(124,233,56,.6)", "rgba(82,191,255,.6)", "rgba(226,180,249,.6)", "#979797"];
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
