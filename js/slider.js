$(document).ready(function() {
  var $currentPos = 0,
      $slideWidth = 620,
      $slides = $('.slide'),
      $numOfSlides = $slides.length,
      $slideTransparent = [$('.slideTransparent')];
      
  
  $('#slideContainer').css('overflow', 'hidden');
  $slides.wrapAll('<div id="slideInner"></div>').css({
    'float' : 'left',
    'width' : $slideWidth
  });
  $('#slideInner').css('width', $slideWidth * $numOfSlides);
  $('#slideContainer')
    .prepend('<span class="control" id="leftControl">⋘</span>')
    .append('<span class="control" id="rightControl">⋙</span>');
  manageControl($currentPos);
  
  $('.control').bind('click', function() {
    $currentPos = ($(this).attr('id') == 'rightControl') ? $currentPos + 1 : $currentPos - 1;
    manageControl($currentPos);
    $('#slideInner').animate({
      'marginLeft' : $slideWidth * (-$currentPos)
    });
    $('.slideTransparent').animate({
      'marginLeft' : $slideWidth * (-$currentPos)
    });
  });
  
  function manageControl(position) {
    if (position == 0) {
      $('#leftControl').hide();
    } else {
      $('#leftControl').show();
    }
    
    if (position == $numOfSlides - 1) {
      $('#rightControl').hide();
    } else {
      $('#rightControl').show();
    }
  }
});