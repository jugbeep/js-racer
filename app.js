$(document).ready(function(){});


let zomb1 = $('#zomb1');
let zomb2 = $('#zomb2');


//key codes 65=a ---> 90=z

//move p1
function movePlayer1(){
	let count1 = 0;
	$('body').on('keyup', function(f){
		if (f.keyCode == 70){
			zomb1.css('@keyframes play {}');
			zomb1.css({'margin-left': '+=9'});
			count1 ++;
		};
		//at finish add winner annoucement
		if (count1 >= 70) {
			$('.container').append("<h1>Blue Zombie Wins</h1>");
			$('.container').append('<button id="reload">Restart Game</button>');
			$('#reload').click(function(){
				location.reload();
			});
			//turn off keyup
			$(this).off('keyup');
		}	
});
}
movePlayer1();

//move p2
function movePlayer2(j){
	let count2 = 0;
	$('body').keyup(function(j){
		if (j.keyCode == 74){ 
			zomb2.css({'margin-left': '+=9'});
			count2 ++;
		};	
		//at finish add winner announcement 
		if (count2 >= 70) {
			$('.container').append("<h1>Pale Zombie Wins</h1>");
			$('.container').append('<button id="reload">Restart Game</button>');
			$('#reload').click(function(){
				location.reload();
			});
			//turn off keyup
			$(this).off('keyup');
		}	
});
}
movePlayer2();








