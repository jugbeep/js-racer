$(document).ready(function(){});


let zomb1 = $('#zomb1');
let zomb2 = $('#zomb2');


//key codes 65=a ---> 90=z

//move p1
function movePlayer1(){
	$('body').keyup(function(e){
		if (e.keyCode == 70){
			zomb1.animate({left: '+=10'}, 10);
		};
});
}
movePlayer1();

//move p2
function movePlayer2(){
	$('body').keyup(function(e){
		if (e.keyCode == 74){ 
			zomb2.animate({left: '+=10'}, 10);
		};
});
}
movePlayer2();


