(function () {

	'use strict'
	
	var container = document.getElementById('container');

	var minMargin = 10;
	var numberOfBoxes = 10;

	initialPopulate();

	function initialPopulate() {
		for(var i = 0; i < numberOfBoxes; i++) {
			var	imageHolder = document.createElement('div');
			imageHolder.className = "imageHolder";
			container.appendChild(imageHolder);
		}
	}

	function getNumberOfChildrenToCreate(numberOfItems, index) {
		return Math.ceil(numberOfItems / index) * index - numberOfItems;
	}

	function appendChildren(numberOfItems) {
		var i;
		for(i = 0; i < numberOfItems; i++) {
			var childToCreate = document.createElement('div');
			childToCreate.className = 'after';
			container.appendChild(childToCreate);
		}
	}

	createPlaceholders();

	// Creating 'blank' divs to fill last row if need.
	function createPlaceholders() {
		var children = document.getElementsByClassName("imageHolder"),
			numberOfChildren = children.length,
			numberOfChildrenToCreate = 0,
			i;

		//	Value is true if children inside parent container fit on single line.
		var isOnSingleLine = true;

		for(i = 1; i < numberOfChildren; i++) {
			if(children[i].offsetTop !== children[i - 1].offsetTop) {
				numberOfChildrenToCreate = getNumberOfChildrenToCreate(numberOfChildren, i);
				isOnSingleLine = false;
				break;
			}
		}

		//  Change parent 'display' for minimum margin between children items.
		if(isOnSingleLine) {
			container.style.display = 'block';
			return;
		}

		container.style.display = 'flex';
		appendChildren(numberOfChildrenToCreate);
	}

	$("#container").resizable();

	$("#container").on( "resize", function() {
		var createdChildren = document.getElementsByClassName("after");
		while(createdChildren[0]) {
			container.removeChild(createdChildren[0]);
		}
		createPlaceholders();
	});

}())
