$(function(){
  //Scroll Animation Code
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated tada'); // All classes will be labeled animated and the "tada" is an effect I chose from the website, make sure to visit https://daneden.github.io/animate.css/ to see them all!
    }, {
      offset: '100%', // If we do not set the offset, the animation will appear too late, or we will need to move our way point if we dont weant to do this.
    }); 
  });