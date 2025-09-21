// Desafio 1:
//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let intento = prompt('¿Qué día es?');

if (intento  == 'Sábado' || intento == 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}

// Desafio 2:
//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let desafio2 = prompt("Ingresa un número");

if(desafio2>0){
    alert("El número es positivo");
} else if (desafio2 < 0) {
    alert('El número es negativo');
} else {
    alert('El número es cero');
}

// Desafio 3:
//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let desafio3 = prompt('Ingrese su puntuación');

if(desafio3>=100){
    alert('¡Felicidades, has ganado!');
} else {
    alert('Intentalo nuevamente para ganar.');
}

// Desafio 4:
//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let desafio4 = prompt('Ingrese su saldo');

alert(`El saldo de su cuenta es: ${desafio4}`);

// Desafio 5:
//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let desafio5 = prompt('Ingresa tu nombre');

alert(`¡Bienvenido ${desafio5}!`);