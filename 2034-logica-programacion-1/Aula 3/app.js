// 1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("¡Bienvenido!");

// 2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let desafio2 = 'Brayan';

console.log(`¡Hola, ${desafio2}`);

// 3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let desafio3 = 'Brayan';

alert(`¡Hola, ${desafio3}`);

// 4. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let desafio4 = prompt('¿Cuál es el lenguaje de programación que más te gusta?');

console.log(desafio4);

// 5. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let D5valor1 = 7;
let D5valor2 = 14;

let D5resultado = D5valor1+D5valor2;

console.log(`La suma de ${D5valor1} y ${D5valor2} es igual a ${D5resultado}.`);

// 6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
let D6valor1 = 21;
let D6valor2 = 14;

let D6resultado = D6valor1-D6valor2;

console.log(`La diferencia entre ${D6valor1} y ${D6valor2} es igual a ${D6resultado}.`);

// 7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let desafio7 = prompt('Ingresa tu edad');

if (desafio7>17){
    console.log("Eres mayor de edad");
} else{
    console.log('Eres menor de edad');
}

// 8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let D8numero = prompt('Ingresa un valor numérico');

if (D8numero>0){
    console.log("Positivo");
} else if (D8numero<0){
    console.log('Negativo');
} else{
    console.log('Cero');
}

// 9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let desafio9=1;

while(desafio9<=10){
    console.log(desafio9);
    desafio9++;
}

// 10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let D10nota = 10;

if (D10nota >= 7){
    console.log('Aprobado');
} else{
    console.log('Reprobado');
}

// 11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let desafio11 = Math.random();

console.log(desafio11);

// 12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let desafio12 = Math.floor(Math.random()*10) + 1;

console.log(desafio12+1);

// 13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let desafio13 = parseInt(Math.random()*1000) + 1;

console.log(desafio13);