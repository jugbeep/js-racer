$(document).ready(function(){});


let zomb1 = $('#zomb1');
let zomb2 = $('#zomb2');


//key codes 65=a ---> 90=z

//move p1
function movePlayer1(){
		let count1 = 0
	$('body').keyup(function(e){
		count1 ++;
		if (e.keyCode == 70){
			zomb1.animate({left: '+=10'}, 10);
		};
		if (count1 >= 50) {
			alert ('Zombie 1 Wins');
		}	
});
}
movePlayer1();

//move p2
function movePlayer2(){
	let count2 = 0
	$('body').keyup(function(e){
		count2 ++;
		if (e.keyCode == 74){ 
			zomb2.animate({left: '+=10'}, 10);
		};	
		if (count2 >= 50) {
			alert ('Zombie 2 Wins');
		}	
});
}
movePlayer2();








