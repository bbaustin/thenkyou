console.log('background.js is loaded');

var imageList = ['Cookie', 'Keitei', 'Kitty', 'Megane', 'Orange', 'Rickenbacker', 'Sock'];
// toothbrush, old computer, old mouse, overeasy egg, soccer ball

function xyGen() {
  var x = (Math.random()) * $(window).width();
  var y = (Math.random()) * $(window).height();
  return [x,y];
}

function moveSVG() {
  var windowWidth = $( window ).width();
  $('img').animate({'left': '+=' + windowWidth + 'px'}, 9999);
  // when position exceeds window width, remove, and reappend that image to the left 

  if ($('img').position().left >= $(window).width()) {
     appendSVG();
     } 
}

function appendSVG() {
  for (var i = 0; i < imageList.length; i++) {
    
    xyGen();

    var x = xyGen()[0];
    var y = xyGen()[1];
    
    var pic = imageList[i];

    $('.container').append('<img class=' + pic + ' src="/../img/' + pic + '.svg">');
    
      console.log($("." + pic).width());
    $("." + pic).css({
      'position': 'absolute',
      'left': (x - $("." + pic).width()) + 'px',
      'top':  (y - $("." + pic).height()) + 'px',
      'overflow': 'hidden'
    });
   }
}
appendSVG();
//moveSVG();

