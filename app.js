let listaDeAmigos = [];

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
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    for (let i = 0; i < listaDeAmigos.length; i++) {
        listaHTML.innerHTML += `<li>${listaDeAmigos[i]}</li>`;
    }
}

function limpaCampo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}