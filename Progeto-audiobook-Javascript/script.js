const botaoPlayPause = document.getElementById("play-pause")
const audioCapitulo = document.getElementById("audio-capitulo")

const numeroCapitulos = 10

let taTocando = 0

function tocarFaixa(){
    audioCapitulo.play()
}
function pausarFaixa{
    audioCapitulo.pause()
}

botaoPlayPause.addEventListener('click', tocarFaixa)