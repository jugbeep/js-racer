$(document).ready(function(){});

let position = {
	x: 100,
	y: 100,
}
let run = 10;

let zomb1 = $('zomb1');
let zomb2 = $('zomb2');




//key codes 65=a ---> 90=z

function movePlayer1(){
	$('body').keyup(function(e){
		if (e.keyCode == 70){
		alert('f was pressed!')};
	});
}
movePlayer1();
