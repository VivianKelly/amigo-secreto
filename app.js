let listaDeAmigos = [];
let listaHTML = document.getElementById('listaAmigos');

function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value;
    if(nomeAmigo == ''){
        alert('Por favor, insira um nome válido.');
    }
    else{
        listaDeAmigos.push(nomeAmigo);
        exibirListaDeAmigos();
        limpaCampo();
    }
}

function exibirListaDeAmigos() {
    limpaLista();
    for (let i = 0; i < listaDeAmigos.length; i++) {
        listaHTML.innerHTML += `<li>${listaDeAmigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Por favor, insira um nome para ser sorteado.');
        return;
    }

    let indiceDoAmigoSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceDoAmigoSorteado];

    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
    limpaLista();
}

function limpaLista(){
    listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
}

function limpaCampo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}