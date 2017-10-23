(function () {

	'use strict'
	
	var container = document.getElementById('container');

	var minMargin = 10;
	var numberOfBoxes = 13;

	initialPopulate();

	function initialPopulate() {
		for(var i = 0; i < numberOfBoxes; i++) {

			var	imageHolder = document.createElement('div');

			imageHolder.className = "imageHolder";
			imageHolder.style.marginRight = minMargin + "px";
			container.appendChild(imageHolder);
		}
	}

	$("#container").resizable();

	$("#container").on( "resize", function() {
		var boxes = document.getElementsByClassName('imageHolder');
		var minLength = 0;
		var minWidth = 0;
		var style = window.getComputedStyle(boxes[0]);
		for(var i = 0; i < boxes.length; i++) {
			var toAdd = boxes[i].offsetWidth + parseFloat(style.marginRight)
			minLength = minLength + toAdd;
			if(boxes[i].offsetTop != boxes[0].offsetTop) {
				minLength = minLength - toAdd;
				if(container.offsetWidth - minLength >= boxes[i].offsetWidth + minMargin) {
					console.log(container.offsetWidth - minLength);
					console.log(boxes[i].offsetWidth + minMargin);
					console.log(container.offsetWidth - minLength - boxes[i].offsetWidth - minMargin);
				}
				break;
			}
		}
	});

}())
