let listaDeAmigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value;
    if(nomeAmigo == ''){
        alert('Por favor, insira um nome válido.');
    }
    else{
        listaDeAmigos.push(nomeAmigo);
        limpaCampo();
    }
}

function limpaCampo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}