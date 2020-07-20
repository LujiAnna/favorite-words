'use strict';
console.log('--- loading: exists.js');

const existsHandler = () => {
	debugger;
	const userInput = prompt('find if the word exist');
	if (userInput === null) {
		return;
	}

	const equalsUserInput = (entry) => {
		return entry === userInput;
	};
	const itExists = words.find(equalsUserInput);
	if (itExists) {
		alert(`'${userInput}' exist`);
	} else {
		alert(`'${userInput}' not exist`);
	}
};
