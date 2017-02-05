$(document).ready(function(){

  $('.nav li').click(function(){
    var category = $(this).attr('class');

    $('.nav li').removeClass('Active');
    $(this).addClass('Active');

    if (category === 'nav-sailing') {
      $('.thumbnail').hide();
      $('.sailing').show();
    };

    if (category === 'nav-travel') {
      $('.thumbnail').hide();
      $('.travel').show();
    };

    if (category === 'nav-music') {
      $('.thumbnail').hide();
      $('.music').show();
    };

    if (category === 'nav-all') {
      $('.thumbnail').show();
    };
  });

  $('.thumbnail').hover(function(){
    $(this).toggleClass('big');
  });

  $('.thumbnail').click(function(){
    if ($('.nav-all').hasClass('Active')) {
      $(this).toggleClass('poof');
      $('.thumbnail').toggleClass('poof');
      $(this).toggleClass('enlarge');
      $('.caption').toggle();
    };
    if ($('.nav-sailing').hasClass('Active')) {
      $(this).toggleClass('poof');
      $('.sailing').toggleClass('poof');
      $(this).toggleClass('enlarge');
      $('.caption').toggle();
    };
    if ($('.nav-travel').hasClass('Active')) {
      $(this).toggleClass('poof');
      $('.travel').toggleClass('poof');
      $(this).toggleClass('enlarge');
      $('.caption').toggle();
    };
    if ($('.nav-music').hasClass('Active')) {
      $(this).toggleClass('poof');
      $('.music').toggleClass('poof');
      $(this).toggleClass('enlarge')
      $('.caption').toggle();
    };
  });

  $('.shark').delay(1000).animate({left:'-=600px'},1000).delay(3000).animate({left:'-=1500px'},500);
  $('.imshark').delay(2300).animate({opacity:'1'},100).delay(1500).animate({opacity:'0'},100);
  $('.paraman').delay(4000).animate({top:'+=560px'},1300).animate({left:'-=500px'},100);
  $('.paraman').delay(4000).animate({top:'-=700px'},500).animate({left:'+=500px'},500).animate({top:'+=200px'},1500);
  $('.blood').delay(5300).animate({opacity:'1'},100).delay(300).fadeOut(1000);
  $('.yeaboi').delay(6000).animate({opacity:'1'},100).delay(300).fadeOut(1000);
  $('.wow').hide().delay(6500).fadeIn(100).delay(3000).hide(100);

});
