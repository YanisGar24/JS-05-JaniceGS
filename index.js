

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
//falta que solo sean 10 numeros

const numeros = prompt("Ingresa 10 numeros, separalos con un espacio.")

console.log(numeros);
console.log(typeof numeros) // es texto
//console.log(numeros.split(' '));
let arrayN = numeros.split(' ');
console.log(arrayN);
//console.log(numeros);
let max = 0;

//Por cada elemento en la lista
arrayN.forEach((numi) => {
    if(max < numi){ 
        max = numi
    }
});
console.log("El numero mas grande es: "+ max);


/*
Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
*/

const segundo = prompt("¿En cuanto tiempo quieres que suene la alarma?");
//Lo convertimos en un int
const primerNum = segundo * 1;
const segundoNum = segundo * 1000;
console.log(segundoNum);
console.log(typeof segundoNum);

                            /*
                            //ciclo para imprimir los segundos
                            for(let i = primerNum; i>=0; i--){
                                //agregamos un Timeout para cada segundo
                                setTimeout(()=>{
                                    if (i>0){
                                        console.log(`Quedan ${i -1} segundos`)
                                    }else{
                                        console.log("Se acabo el tiempo");
                                    }
                                }, 1000);
                            };
                            */

let arraySegundos = [];
for( let i = 1; i <= primerNum; i++){
    arraySegundos.push(i);
};
console.log(arraySegundos);

//funcion de segundos
function delaySec(){
    arraySegundos.forEach((segundito)=>{
        setTimeout(()=> {
            console.log(segundito);
        }, 1000);
    });
};


function alarma(){
    console.log(`Este mensaje aparecera despues de ${segundo} segundos`)
};


//segunditos();
setTimeout(delaySec, 1000);
//setTimeout(delaySec, 1000);
setTimeout(alarma, segundoNum);


/*
Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/


let palindromo = prompt("Escribe un palindromo");
let palindromoSinSignos = palindromo.replace(/[\W_-]/g, ""); //esta parte si la tuve que buscar en inernet :''v 
let palindromoMinus = palindromoSinSignos.toLowerCase();

console.log(palindromo);
console.log(palindromoSinSignos);
console.log(palindromoMinus);

//volteamos el string
let cadena1 = palindromoMinus.split("");
console.log(cadena1);
let cadenaInv = cadena1.reverse();
console.log(cadenaInv);
let cadenaFin = cadenaInv.join();
console.log(cadenaFin);

//comparamos los strings
if(cadenaFin === palindromoMinus){
    console.log("Segun Google, esto es un palindromo");

}else{
    console.log("No sabia que era un palindromo hasta que hice este ejercicio, pero puedo asegurar que esto no lo es :v ");
};


/*
Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/
//Recio :'V

let numerito = prompt("Ingresa un num n para sacar un factorial");

function numfactorial(n) {
    // Caso done si n = 0 entonces va a regresar el mismo
    if (n === 0) {
        return 1;
    }
    // Caso recursivo
    //regresa el num n + la misma funcion con la formula de la factorizacion
    return n * numfactorial(n - 1);
    //Basicamente es como si se escribiera n * (!(n-1));
}
let respuesta = numfactorial(numerito);

// Ejemplo de uso
console.log(`El factorial de ${numerito} es : ${respuesta}`); 



/*
Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
*/

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
//console.log(typeof multiDimension);

//funcion para separar la matriz
function matriz1D(matriz){
    let result = []; //aqui guardamos los elementos ya separados
     //los 3 puntos van a mostrar la lista de argumentos
    let elementos = [...matriz]; 
    
    //mientras que el tamaño de la matriz sea mayor a 0
    while (elementos.length > 0){
        let elem = elementos.pop() //sacamos un elemneto
        
        //Array,isArray literealmenete nos dice si el elemento es un array :v
        
        //Si el array si es un array que recibe al elemento
        if(Array.isArray(elem)){ //lo tuve que investigar en internet
            //los 3 puntos van a mostrar la lista de argumentos
            //En este caso, hacemos que la lista de argumentos se insetten en el array de elementos
            
            //Metemos ese elemnto a la lista almacenandolos
            elementos.push(...elem); //tambien lo saqué de internet
        } else {
            //si no es asi, simplemente lo metemos en el la lista final
            result.push(elem);
        };
    };
    //Matriz final pero al reves
    console.log(result);
//Imprimimos la matriz ya plana, pero primero la voletamos 
    let final = result.reverse();
    console.log(final);

};

const arrayPlano = matriz1D(multiDimension);
console.log(arrayPlano);

/*
console.log("separador");

//ejemplo de los ... dentro del array
let prueba = [1, 2, 4, 5, 6, 7, 9];
//tipo objeto
console.log(prueba); //output : [1, 2, 4, 5, 6, 7, 9]
console.log(...prueba); //output: 1 2 4 5 6 7 9

*/


