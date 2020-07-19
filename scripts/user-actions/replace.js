'use strict';
console.log('--- loading: replace.js');

const replaceHandler = () => {
    debugger;
    const userInput1 = prompt('enter the word to replace:');
    // quit if user changes their mind
    if (userInput1 === null) {
        return;
    }

    const entryIsUserInput = (entry) => {
        return entry === userInput1;
    };
    // check if array is empty/ word is not found in the list
    const inputExists = words.filter(entryIsUserInput);
    if (Array.isArray(inputExists) && inputExists.length === 0) { //inputExists && inputExists.constructor === Array && inputExists.length === 0
        alert(`"${userInput1}" does not exist`);
        return;
    }
    const userInput2 = prompt(`enter a word to replace "${userInput1}":`);
    // quit if user changes their mind
    if (userInput2 === null) {
        return;
    }
    // Compare if true then push/map
    const replaceWithInput2 = (entry) => {
        return (entry === userInput1) ? userInput2 : userInput1; // return https://hackyourfuture.be/debuggercises/?path=%2Fexercises%2F18-functions-401%2F0-examples%2F0-implcit-return.js
    };
    // console.log(words);
    words = words.map(replaceWithInput2);
    // console.log(words); // why it gives undefined ?

    displayHandler(`"${userInput1}" has been replaced with "${userInput2}":`);
};