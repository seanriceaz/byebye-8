jQuery(function(){
  var boomSound = new Audio('/audio/explosion.mp3');
  $('.boom').click(function(e){
      e.preventDefault();
      $('.intro').fadeOut();
      //Play explostion visual
      $('.droid, .droid-shadow-ball, .droid-groundshadow').hide(0);
      $('body').append('<div class="explosionContainer"><img src="/img/explosion.gif" alt="boom"></div>');
      $('.explosionContainer').fadeOut(1000);
      //play explosion

      boomSound.play();
      //Show next steps

       window.setTimeout(function(){
         $('.explosionContainer').remove();
         $('.modal').fadeIn(500);

       }, 1000);

  });
});
