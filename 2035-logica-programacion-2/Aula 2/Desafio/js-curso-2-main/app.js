let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function consoleButton(){
    console.log('El botón fue clicado');
}

function promptButton(){
    let ciudad = prompt('Ingrese una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function alertButton(){
    alert('Yo amo JS');
}

function sumaButton(){
    let num1 = parseInt(prompt('Ingresa un número'));
    let num2 = parseInt(prompt('Ingresa un número'));
    let resultado = num1 + num2;
    alert(resultado);
}