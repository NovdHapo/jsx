function logValue(id) {
	var el = document.getElementById(id);
	console.log(el.value);
}

function getValue(id) {
	var el = document.getElementById(id);
	return el.value;
}


var firstNameId = 'first-name';
var lastNameId = 'last-name';



logValue(firstNameId);
logValue(firstNameId);
logValue(firstNameId);

logValue(lastNameId);
logValue(lastNameId);
logValue(lastNameId);

var valueses = getValue('first-name');

window.alert(valueses);