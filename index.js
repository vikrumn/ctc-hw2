$(document).ready(function(){ 
 //INSERT CODE HERE

 //QUESTION 1
 function Dog(){
 
 }
 Dog.prototype.Bark=function(){
 		return 'woof';
 }
 function ShibaInu(){

 }
 ShibaInu.prototype=new Dog();
 ShibaInu.prototype.constructor=ShibaInu;
 ShibaInu.prototype.bark=function(){
 	return 'much wow very javascript';
 }
 var a=new ShibaInu();
 a.bark();

 //QUESTION 3
$( ".button.secondbutton" ).click(function(){
	$( ".secondheading" ).text("Narwhals are the best!");
	$( ".secondheading" ).css('color', 'turquoise');
});

 //QUESTION 4
$( ".button", "#task4" ).click(function(){
	$( "#hipcat" ).css({'-webkit-filter' : 'blur(2px) sepia(30%)' 
	});
});
 //QUESTION 5
$( ".car .button" ).click(function(){
	$( ".spincar .wheel" ).css({'-webkit-animation-name' : 'spin',
		'-webkit-animation-play-state' : 'running'});
	$( ".spincar" ).css({'-webkit-animation-play-state' : 'running'});
});
 //QUESTION 6
 $( ".nyancat" ).animate({"left": "+=10000px"}, 50000, "linear");
 $( ".rainbows").animate({width:10000}, 50000, "linear")
});