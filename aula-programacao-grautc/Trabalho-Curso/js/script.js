function lancamentos(){ 
    let titulo = document.querySelectorAll('.card-title')
    let img = document.querySelectorAll(".card img")
    let descricao = document.querySelectorAll(".card-text")


    let arrayTitulos = ["Zhenwu Shijie – True Martial World", "Spirit Blade Mountain", "Regressor of the Fallen Family", "Hitoribocchi no Isekai Kouryaku", "The Player Hides His Past", "Nano Machine"];

    let arrayImg = ['https://img.mangaschan.com/uploads/manga-images/z/zhenwu-shijie-true-martial-world/thumbnail.webp', "https://img.mangaschan.com/uploads/manga-images/s/spirit-blade-mountain/thumbnail.webp", "https://img.mangaschan.com/uploads/manga-images/r/regressor-of-the-fallen-family/Regressor%20of%20the%20Fallen%20Family%20mangaschan.webp", "https://img.mangaschan.com/uploads/manga-images/h/hitoribocchi-no-isekai-kouryaku/thumbnail.jpg", "https://img.mangaschan.com/uploads/manga-images/t/the-player-hides-his-past/thumbnail.webp", "https://mangaschan.net/wp-content/uploads/Ler-Online-Nano-Machine-Manhwa.webp"]

    let arrayDescricao = ["Com os mais fortes especialistas dos 33 Céus, o Imperador Humano e seu oponente estava envolvido em uma batalha final. O Imperador Humano destruiu o Mundo Abissal e um cartão roxo misterioso que havia selado a arma poderosa do Rei Demônio Abissal...", "Há uma montanha chamada Spirit Blade Mountain. Dentro ou pela montanha reside assistentes, também conhecidos como espírito Spirit Blade Masters. Juntos, eles formam o clã Spirit Blade. Spirit Blade é sinônimo de magia, como é a Lâmina suas formas Espirituais. A relação atual entre a Montanha e o real Spirit Blade é desconhecida...", "Uma vida cheia de arrependimentos. Quando ele percebeu seus erros e decidiu levar uma nova vida, já era tarde demais. Sua família já tinha partido.Ele suportou cada dia com puro ódio. Finalmente, no fim de seu sofrimento, seu desejo alcançou os céus – um desejo não perdoado.Ele desafia o destino para erguer sua espada...", "Exilado da classe? Checado Ser transportado para um mundo alternativo com seus colegas? Checado Encontrar um Deus em uma espécie de Limbo entre os dois mundos? Checado Pegar uma skill roubada? Não gostaria de ser você, já foram todas vendidas..", "O jogo de realidade virtual “História do continente de Archana” se tornou realidade, e os “jogadores”, que estavam sincronizados com os humanos, apareceram para proteger o mundo. Lee Hoyeon, que era só um assalariado comum, assumiu o corpo do personagem que tinha criado no ensino fundamental, “Grandfell Claudi Arpeus Romeo.”...", "Depois de ser desprezado e ter sua vida posta em perigo, um órfão do Culto Demoníaco, Cheon Yeo-Woon, recebe a visita inesperada de seu descendente do futuro, que insere uma nano máquina no corpo de Cheon Yeo-Woon, que muda drasticamente Vida de Cheon Yeo-Woon após sua ativação. A história da jornada de Cheon Yeo-Woon de contornar o Culto Demoníaco e se tornar o melhor artista marcial apenas começou..."]

    for(let i = 0; i < arrayTitulos.length; i++){
        titulo[i].innerText = arrayTitulos[i];
        img[i].src = arrayImg[i]
        descricao[i].innerText = arrayDescricao[i]
    }
}

if (window.location.href.indexOf("lancamentos.html") !== -1) {
    document.addEventListener("DOMContentLoaded", lancamentos);
}

function linkButton(){
    let botaoLerMais = document.querySelectorAll(".card-body a");
    let arrayLinks = [".","https://mangaschan.net/manga/solo-leveling/","https://mangaschan.net/manga/kaijuu-8-gou/","https://mangaschan.net/manga/jujutsu-kaisen/", "https://mangaschan.net/manga/one-punch-man/", "https://mangaschan.net/manga/baki-dou/","https://mangaschan.net/manga/vagabond/"]

    for(let i = 0; i < arrayLinks.length; i++){
        botaoLerMais[i].href = arrayLinks[i];
    }
}
if (window.location.href.indexOf("index.html") !== -1) {
    document.addEventListener("DOMContentLoaded", linkButton);
}