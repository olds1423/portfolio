'use strict'

(function(module){

  $('.readMore').click(function (event) {
    $(this).parent().find('.projectContent').slideToggle('slow');
    $(this).text($(this).text() == 'Read less...' ? 'Read more...' : 'Read less...');
  });

  function showhome(){
    $('#home').fadeIn(1500);
    $('#aboutMe').hide(100);
  };

  function showAbout(){
    $('#aboutMe').fadeIn(1500);
    $('#home').hide(500);
  }


})(window);


// $('#homeNav').click(function(){
//   $('#home').fadeIn(1500);
//   $('#aboutMe').hide(100);
// });
//
// $('#aboutMeNav').click(function(){
//   $('#aboutMe').fadeIn(1500);
//   $('#home').hide(500);
// });
