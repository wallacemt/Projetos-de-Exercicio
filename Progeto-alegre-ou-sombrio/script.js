var somAtual = null;

function mudardia(){
    if(somAtual !== null){
        somAtual.pause();
    }

    var som = document.getElementById("som1")
    som.play();
    somAtual = som;
    let image = document.getElementById("neutro");
    image.src = "botdia.png";
    let corpoPag = document.body;
    corpoPag.style.backgroundImage = "url('dia.jpg')";
    body.style.backgroundPosition = "center center";
    bady.style.backgroundSize = 'cover'
    body,style.backgroundAttachment = 'fixed'

    var som2 = document.getElementById("som2");
    som2.pause();
}
function mudarnoite(){
    if (somAtual !== null) {
        somAtual.pause();
    }

    var som = document.getElementById("som2")
    som.play()
    somAtual = som;
    let image = document.getElementById("neutro");
    let corpoPag = document.body
    image.src="botnoite.png"
    corpoPag.style.backgroundImage = "url('noite.jpg')";

    var som1 = document.getElementById("som1");
    som1.pause();
}
