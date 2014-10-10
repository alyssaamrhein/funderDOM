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
var togTargTwo = $('.toggleTarget-2')
var byeBox = $('.content');
var boxTwo = $('.content-2');
/*
togTarg.click(function() {
  byeBox.toggleClass( "active" );
});

togTargTwo.click(function() {
  byeBox.toggleClass( "inActive" )
  boxTwo.toggleClass( "active" );
});
*/

// I think you may have more up to date code on your computer :(
// Get that on github.
togTarg.toggleClass( ".active", true );
