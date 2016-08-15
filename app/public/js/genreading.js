// ../go/..
// Generate attributes of reading selections.

var myId = parseInt($("#myId").text())

$.ajax({
  url: '/go/' + myId, // dynamic url. how? 
  type: 'post',
  dataType: 'json',
  success: function(response) {
    console.log(typeof response);
    console.log(response);
    console.log("new response");
  },
  error: function(error) {
    console.log("error: " + error);
  }
});


