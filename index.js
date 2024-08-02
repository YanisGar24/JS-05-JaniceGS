

/*
User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
*/

console.log("User profile");
let username = prompt("Cual es tu nombre?");
let age = prompt("Cual es tu edad?");

let movies = prompt("Cual es tu pelicula favorita? Menciona 3, separalos con coma");
 movies.split(',');

let infoPersonal = []; //Array donde guardar la informacino
infoPersonal.push(username, age, movies);

console.log(`Bienvenidx ${username}! , tu edad es ${age}, tus peliculas ${movies} son muy buenas opciones, pero la que mas me gusta es ${movies[0]}`);
console.log(`La informacion recibida es: ${infoPersonal}`);




/*
Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
*/

/*
Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
*/

/*
Result example: "Time for bed after 10 seconds".
*/

/*
Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/

/*
Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/

/*
Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
*/