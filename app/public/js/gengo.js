// ../go
// Generate list of reading selections.

$.ajax({
  url: '/go',
  type: 'post',
  dataType: 'json',
  success: function(response) {
    console.log("Pushing from gengo!");
    for (var i = 0; i < response.length; i++) {
      $('.button_container').append(response[i]); 
    } 

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
