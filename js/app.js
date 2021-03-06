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
  if($('#bb8-style').length < 1 ){
      $('body').prepend('<style type="text/css" id="bb8-style"></style>');
  }
  if(getParameterByName('color'))
  {
    $('#bb8-style').append('body .droid-accent-color{fill: #'+getParameterByName('color')+'; }'+
    '.droid-accent-bordered{fill: #'+getParameterByName('color')+'; }'
    );
  }
  //Do Gyro stuff if the browser has it!
  if($('#bb8-orientation').length < 1 ){
      $('body').prepend('<style type="text/css" id="bb8-orientation"></style>');
  }
  if(gyro.hasFeature('devicemotion')){
    gyro.startTracking(function(o) {
        // o.x, o.y, o.z for accelerometer
        // o.alpha, o.beta, o.gamma for gyro
        var reactivity = 4;
        //o.gamma is the tilt in degrees. 0 is vertical
        var rotateSpeed = 0;
        if (o.gamma !=0)
         rotateSpeed = reactivity / Math.sqrt(Math.abs(o.gamma)) ; //measured in rotations per second. Default is 2

        var rotateAngle = o.gamma *-1;
        var style = "";
        console.log(o.gamma);
        if (o.gamma >0){
          //style = style + '.droid-body{ animation-duration: '+ rotateSpeed+'s; -webkit-animation-duration: '+ rotateSpeed+'s;}';
          $('.droid-body').css({'animation-duration':(rotateSpeed)+'s','-webkit-animation-duration':(rotateSpeed)+'s','animation-direction':'reverse'});
        } else {
            $('.droid-body').css({'animation-duration':(rotateSpeed)+'s','-webkit-animation-duration':(rotateSpeed)+'s'});
        }
        /*style = style + '@keyframes rockdroid {'+
          '0% {'+
            'transform: rotate('+(rotateAngle - 2)+'deg);'+
          '}'+
          '50% {'+
        		'transform: rotate('+(rotateAngle+2)+'deg);'+
          '}'+
        	'100%{'+
        	'transform: rotate('+(rotateAngle - 2)+'deg);'+
        	'}'+
        '}';*/
        style = style + 'animation-name:none; -webkit-animation-name:none; transform: rotate('+(rotateAngle)+'deg);';
        //$('#bb8-orientation').html(style);
        $('.droid').css({'animation-name':'none', '-webkit-animation-name':'none','transform':'rotate('+(rotateAngle)+'deg)'});
        console.log(style);
    });
  }

});
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
