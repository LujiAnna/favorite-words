'use strict';
console.log('--- loading: search.js');

const searchHandler = () => {
    debugger;
    const userInput = prompt('enter a search query:');
    if (userInput === null) {
        return;
    }

    const includesSubstring = (entry) => {
        return entry === userInput;
    };
    const foundWords = words.filter(includesSubstring);
    displayHandler(`search results for "${userInput}": \n`, foundWords);
};