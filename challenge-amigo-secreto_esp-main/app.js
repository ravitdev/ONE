// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nuevoAmigo = document.getElementById('amigo').value.trim();
    if (nuevoAmigo === ''){
        asignarTextoElemento('h2','Por favor, inserte un nombre.')
    }else{
        amigos.push(nuevoAmigo);
        limpiarCaja();

        asignarTextoElemento('.section-title', 'Digite el nombre de sus amigos');
    }
    actualizarListaDeAmigos();
}

function actualizarListaDeAmigos(){
    let listaAmigosMostrada = document.getElementById('listaAmigos');
    listaAmigosMostrada.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        const li =document.createElement("li");
        li.textContent = amigos[i];
        listaAmigosMostrada.appendChild(li);
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function sortearAmigo(){
    if(amigos.length != 0){
        let numeroGenerado =  Math.floor(Math.random()*amigos.length);
        document.getElementById('resultado').innerHTML = amigos[numeroGenerado];

    }
}