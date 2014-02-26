$(document).ready(function(){ 
  
  $('#firstbutton').click(function(){
    $('#firstheading').css('color', 'hotpink');
  });
  
  $('.secondbutton').click(function(){
    $('.secondheading').html('Hah! Bunnies are the best.');
    $('.secondheading').css('color', 'turquoise');
  });

  
});