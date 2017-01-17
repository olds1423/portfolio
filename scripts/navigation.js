'use strict'

$('#homeNav').click(function(){
  $('#home').fadeIn(1500);
  $('#aboutMe').hide(100);
});

$('#aboutMeNav').click(function(){
  $('#aboutMe').fadeIn(1500);
  $('#home').hide(500);
});


//Does this satisfy the first and second stretch goal?
$('.readMore').click(function (event) {
  $(this).parent().find('.projectContent').slideToggle('slow');
  $(this).text($(this).text() == 'Read less...' ? 'Read more...' : 'Read less...');
});
// $('.navTab').on('click', function(){
//   $('.navSection').hide(500);
//   console.log($(this).data());
// })
