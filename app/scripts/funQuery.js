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
var byeBox = $('.content');

togTarg.click(function() {
  $(this).children().last().toggleClass("active");
});
