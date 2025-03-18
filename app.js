//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let entradaDeAmigos = document.querySelector('input').value;
    if (entradaDeAmigos == ''){
        alert('Por favor, insira um nome!');
    } else {
        amigos.push(entradaDeAmigos);
        limparCampo();
        exibirLista();
        document.getElementById('amigo').focus();
    }
    
}

function exibirLista () {
    let ulListaAmigos = document.getElementById('listaAmigos');
    ulListaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = amigos[i];
        ulListaAmigos.appendChild(li);
}    
}

function sortearAmigo() {
    let resultadoSorteio = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert('Insira a lista');
    } 
    else {
        let ulListaAmigos = document.getElementById('listaAmigos');
        ulListaAmigos.innerHTML = "";
        let numeroAleatorio = gerarAleatorio();
        resultadoSorteio.innerHTML = `O amigo secreto sorteado é: ${amigos[numeroAleatorio]}`;
    }
}

function gerarAleatorio () {
    let tamanhoArray = amigos.length;
    return parseInt(Math.floor(Math.random() * tamanhoArray));
}


function exibirTexto(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function limparCampo() {
    entrada = document.querySelector('input');
    entrada.value = '';
}