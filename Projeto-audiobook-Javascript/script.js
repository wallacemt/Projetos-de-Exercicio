const botaoPlayPause = document.getElementById("play-pause");
const audioCapitulo = document.getElementById("audio-capitulo");
const botaoProximo = document.getElementById("proximo")
const botaoAnterior= document.getElementById("anterior")

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;
function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle');
    botaoPlayPause.classList.add("bi-pause-circle-fill");
}
function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle');
}

function tocarOuPausar(){
    if( taTocando == 0) {
        tocarFaixa();
        taTocando += 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function proximaFaixa() {
    if(capituloAtual == numeroCapitulos){
        capituloAtual = 1;
    }else{
        capituloAtual += 1
    }
    audioCapitulo.src = "books/dom-casmurro/" + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    let faixaAtual = document.getElementById('faixa');
    faixaAtual.innerText = 'Capítulo ' + capituloAtual;
}

function anteriorFaixa() {
    if(capituloAtual == 1){
        capituloAtual = numeroCapitulos;
    }else{
        capituloAtual -= 1;
    }
    audioCapitulo.src = "books/dom-casmurro/" + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    let faixaAtual = document.getElementById('faixa');
    faixaAtual.innerText = 'Capítulo ' + capituloAtual;
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximo.addEventListener('click', proximaFaixa);
botaoAnterior.addEventListener('click', anteriorFaixa);