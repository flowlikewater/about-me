$(document).ready(function(){
  $('.fly').removeClass('bye');
  $('.black-layer').delay(3000).css('opacity',0.6);
  $('.fly').delay(3000).animate({top:'45%'},1000);
  $('.enter').delay(3500).fadeIn(1000);
  $('.enter').click(function(){
    $('.white-layer').css('min-height','100%');
  })
  $('header label').hover(function(){
    $(this).toggleClass('changehover');
  })

})
