/* The next classes where adapted from chatgpt */

const outputElement = document.getElementById('output');
const buttonElement = document.getElementById('changeButton');

// let clickCount = 0;

// buttonElement.addEventListener('click', function(changetext) {
// clickCount++;
// outputElement.textContent = `Button clicked ${clickCount} times!`;
// });

buttonElement.addEventListener('click', function () {
console.log("hello");
    outputElement.innerHTML = 'New text';

});
