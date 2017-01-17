'use strict'

// $('#homeNav').click(function(){
//   $('#home').fadeIn(1500);
//   $('#aboutMe').hide(100);
// });
//
// $('#aboutMeNav').click(function(){
//   $('#aboutMe').fadeIn(1500);
//   $('#home').hide(500);
// });

$('.navTab').on('click', function(){
  $('.navSection').hide(500);
  console.log($(this).data-);
})
