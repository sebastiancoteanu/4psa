(function () {

	'use strict'
	
	var container = document.getElementById('container');

	var minMargin = 10;
	var numberOfBoxes = 9;

	initialPopulate();

	function initialPopulate() {
		for(var i = 0; i < numberOfBoxes; i++) {
			var	imageHolder = document.createElement('div');
			imageHolder.className = "imageHolder";
			container.appendChild(imageHolder);
		}
	}

	$("#container").resizable();

	$("#container").on( "resize", function() {
		
	});

}())
