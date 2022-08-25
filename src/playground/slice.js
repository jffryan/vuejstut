const sushi = ["Tuna", "Salmon", "Yellowtail", "Eel", "Octopus", "Uni"];

console.log(sushi.slice(), "----I'm the original array----");
// Lower bound index slice
console.log(sushi.slice(2), "----I'm a copy of idx[2] to idx[n-1]----");
// Upper bound index slice
// INCLUSIVE LOWER BOUND, EXCLUSIVE UPPER BOUND
console.log(sushi.slice(2, 5), "----I'm a copy of idx[2] to idx[5-1]----");
