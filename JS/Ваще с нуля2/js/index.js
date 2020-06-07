function addErrorClass(elementId) {
	var element = document.getElementById(elementId);
	element.className = 'error-input';
}

function addErrorClassToAllInputs() {
	addErrorClass('first-name');
	addErrorClass('last-name');
	addErrorClass('address');
}

//window.setTimeout(addErrorClassToAllInputs, 2000);

var sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', addErrorClassToAllInputs);


function onFirstNameKeyup() {
	addErrorClass('first-name');
}

var firstNameEl = document.getElementById('first-name');

firstNameEl.addEventListener('keyup', onFirstNameKeyup);