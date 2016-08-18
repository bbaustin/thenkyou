$.ajax({
  url: '/',
  type: 'post',
  dataType: 'json',
  success: function(response) {
    console.log(typeof response);
    console.log(response);
    for (var i = 0; i < response.length; i++) {
      $('ul').append('<li>' + response[i] + '</li>');
    } 
  },
  error: function(error) {
    console.log("error: " + error);
  }
});
