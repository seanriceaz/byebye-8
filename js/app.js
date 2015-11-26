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
      try{
        _trackEvent("click", "bb8-boom");
      } catch (e){};
      boomSound.play();
      //Show next steps

       window.setTimeout(function(){
         $('.explosionContainer').remove();
         $('.modal').fadeIn(500);

       }, 1000);

  });
  if(getParameterByName('color'))
  {
    $('body').prepend('<style type="text/css">'+
    'body .droid-accent-color{fill: #'+getParameterByName('color')+'; }'+
    '.droid-accent-bordered{fill: #'+getParameterByName('color')+'; }'+
    '</style>');
  }
});
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
