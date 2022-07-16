const numbers = [1, 2, 3, 4, 5];
console.log(numbers, "NUMBERS");

// Map is just a simpler way of doing a foreach in ES6
const squares = numbers.map((num) => num * num);
console.log(squares, "SQUARES");
