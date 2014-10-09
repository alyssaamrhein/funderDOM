/*$('.messages').text('Woohoo! I\'m alive.');


var listElements = $('li');

listElements.on('mouseover', function (event){
  $(this).addClass('stripe');
});

listElements.on('mouseout', function (event){
  $(this).removeClass('stripe');
});


var pElements = $('p');

pElements.on('click', function (event){
  $(this).hide();
});

$('#reset').on('click', function (event){
  pElements.show();
});
*/

var togTarg = $('.toggleTarget');

togTarg.click(function() {
  $('.content').toggleClass( "active" );
});

$('.toggleTarget-2').click(function() {
  $('.content').toggleClass( "inActive" );
});
