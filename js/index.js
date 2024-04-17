var div = document.getElementById('hide');
var display = 1;

//Ici on s'assure que tout le contenu de la page html est chargée avant de lancer le JavaScript.
//Avec le addEventListener, on attend ici que tout le contenu du dom (la page html) soit chargée, ce qui permet
//d'avoir ensuite des interactions en Javscript qui soient chargées APRES et pas AVANT le contenu de la page.
document.addEventListener("DOMContentLoaded", () => {
	console.log("document ready!");

	var para = document.getElementById("player");

	//para.addEventListener("click", updateName);
	
	//function updateName() {
	//  var name = prompt("Enter a new name");
	 // para.textContent = "Player 1: " + name;
	//}

});


function onMyFrameLoad() {

	//var elem = document.body;
	var elem = document.getElementById("frame1").contentWindow.document.body;
	var div = document.getElementById("player");


	elem.addEventListener("click", function () {
		console.log("frame1 clicked!");
		
	
		// ici c'était un problème parce que j'appelle une première fois mon element player donc ca le fait apparaitre 
		// et ensuite peut importe le reste de la fonction le player reste à l'écran
		//document.getElementById("player").style.border = "2px solid red";
		
		if(display == 1){
			div.style.display = 'block';
			display = 0;
			//document.getElementById("player").style.border = "2px solid red";
		}
		else{
			div.style.display = 'none';
			display = 1;
		}
		
		

	});



	var elem = document.getElementById("frame2").contentWindow.document.body;
	elem.addEventListener("click", function () {
		console.log("frame2 clicked!");
		document.getElementById("frame2").style.border = "2px solid green";

		if(display == 1){
			div.style.display = 'block';
			display = 0;
			//document.getElementById("player").style.border = "2px solid red";
		}
		else{
			div.style.display = 'none';
			display = 1;
		}

	});

	var elem = document.getElementById("frame3").contentWindow.document.body;
	elem.addEventListener("click", function () {
		console.log("frame3 clicked!");
		document.getElementById("frame3").style.border = "2px solid blue";
	});



}







