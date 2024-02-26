var conteudo = document.getElementById('conteudo');
var titulo = document.getElementById('titulo')

var conteudoExtra = document.getElementById("content-extra")

var banner1 = document.getElementById('conteudo-1');
var subtitulo1 = document.getElementById('subtitulo-1');
var link1 = document.getElementById('link-1');

var banner2 = document.getElementById('conteudo-2');
var subtitulo2 = document.getElementById('subtitulo-2');
var link2 = document.getElementById('link-2');

var banner3 = document.getElementById('conteudo-3');
var subtitulo3 = document.getElementById('subtitulo-3');
var link3 = document.getElementById('link-3');

var taAparecendo = 0

function menu(){
    let menu = document.getElementById('menu')
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
        conteudo.style.display = 'none'
    }else{
        menu.style.display = 'block'
        conteudo.style.display = 'none'
    }
}

function butseg(){
    const subtitulosAnimesSegunda=[
    "Kekkon Yubiwa Monogatari\n Temporada: Inverno 2024\n Estúdio: Staple Entertainment\n Status: Em Progresso\n Gêneros: Ação Ecchi Fantasia Romance", "Bucchigiri?\nTemporada: Inverno 2024\nEstúdio: MAPPA\nGêneros: Ação", "Undead Unluck\n Temporada: Outono 2023\nAutor: Yoshifumi Tozuka\nDireção: Yuuki Yase\n Estúdio: David Production\n Gêneros: Ação, Comédia, Shounen, Sobrenatural, Superpoder"];

    const imagensAnimesSegunda=["https://www.anitube.vip/media/categories/video/32cc64407f53842cdef8a3f482a22410.jpg", "https://cdn.anicdn.net/media/categories/video/8693722045353926369c8e7ab8a5ff3e.jpg", "https://cdn.anicdn.net/media/categories/video/95769d5e5d2d94eb3d1f1381915f876d731.jpg"];

    const linkAnimesSegunda = ["https://www.anitube.vip/anime/kekkon-yubiwa-monogatari","https://www.anitube.vip/download/anime/bucchigiri", "https://www.anitube.vip/download/anime/undead-unluck"];

    if(taAparecendo == 0){
        //Area de cabeçalho
        conteudo.style.display = 'inline'
        titulo.innerText = 'Animes de Segunda-Feira'
        subtitulo1.style.display = 'block'
        subtitulo2.style.display = 'block'
        subtitulo3.style.display = 'block'

        //Inserindo intens dentro da section
        subtitulo1.innerText = subtitulosAnimesSegunda[0]
        banner1.style.backgroundImage ='url(' + imagensAnimesSegunda[0] + ')';
        banner1.style.display = 'block'
        link1.href = linkAnimesSegunda[0];
        
        subtitulo2.innerText = subtitulosAnimesSegunda[1]
        banner2.style.backgroundImage = 'url(' + imagensAnimesSegunda[1] + ')';
        banner2.style.display = 'block'
        link2.href = linkAnimesSegunda[1];
        
        subtitulo3.innerText = subtitulosAnimesSegunda[2]
        banner3.style.backgroundImage = 'url('+ imagensAnimesSegunda[2] + ')';
        banner3.style.display = 'block'
        link3.href = linkAnimesSegunda[2];

        conteudo.style.display = 'block'
        if(window.innerWidth <= 800 && taAparecendo === 0){
            let menu = document.getElementById('menu')
            menu.style.display = 'none'
        }
        taAparecendo +=1
    }else{
        conteudo.style.display = 'none'
        taAparecendo = 0
    }
    
}

function butter(){
    const subtitulosAnimesTerca = ["Boku no Kokoro no Yabai Yatsu Season 2\nTemporada: Inverno 2024\nEstúdio: Shin-Ei Animation\nGêneros: Comédia Romance", "Urusei Yatsura (2022) 2nd Season\nEstúdio: David Production\nStatus: Em Progresso\nGêneros: Comédia Romance Sci-Fi"];
    const imagensAnimesTerca = ["https://www.anitube.vip/media/categories/video/ffdf04427cfea3528928482d8c9ee6d4.jpg", "https://www.anitube.vip/media/categories/video/afd0deef11d5a3a4890d1f0cb6902092.jpg"];
    const linkAnimesTerca = ["https://www.anitube.vip/anime/boku-no-kokoro-no-yabai-yatsu-season-2", "https://www.anitube.vip/anime/urusei-yatsura-2022-2nd-season"]
    if(taAparecendo == 0){
        //Area de cabeçalho
        conteudo.style.display = 'inline'
        titulo.innerText = 'Animes de Terça-Feira'
        subtitulo1.style.display = 'block'
        subtitulo2.style.display = 'block'
    
        //Inserindo intens dentro da section
        subtitulo1.innerText = subtitulosAnimesTerca[0]
        banner1.style.backgroundImage ='url(' + imagensAnimesTerca[0] + ')';
        banner1.style.display = 'block'
        link1.href = linkAnimesTerca[0];
    
        subtitulo2.innerText = subtitulosAnimesTerca[1]
        banner2.style.backgroundImage = 'url(' + imagensAnimesTerca[1] + ')';
        banner2.style.display = 'block'
        link2.href = linkAnimesTerca[1];

        conteudo.style.display = 'block'

        conteudoExtra.style.display = 'none';

        if(window.innerWidth <= 800 && taAparecendo === 0){
            let menu = document.getElementById('menu')
            menu.style.display = 'none'
        }

        banner3.style.display = 'none'
        subtitulo3.innerText = ''

        taAparecendo +=1
    }else{
        conteudo.style.display = 'none'
        taAparecendo = 0
        
    }
}

function butqua(){
    const subtitulosAnimesQuarta = ["Mato Seihei no Slave\nEstúdio: Seven Arcs\nStatus: Em Progresso\nGêneros: Ação Ecchi Fantasia", "Shangri-La Frontier\nAutor: Ryousuke Fuji e Katarina\nDireção: Toshiyuki Kubooka\nEstúdio: C2C\nGêneros: Ação Aventura Fantasia Jogos Shounen", "Shaman King: Flowers\nEstúdio: Bridge\nGêneros: Ação, Aventura, Sobrenatural"];

    const imagensAnimesQuarta = ["https://www.anitube.vip/media/categories/video/5d9539763ee2a79091013e3792bbf267.jpg", "https://www.anitube.vip/media/categories/video/e5bb61f161dadfca4ebe6d6016a94462940.jpg", "https://cdn.anicdn.net/media/categories/video/afa0c448ffaca160a7d4ee03b04f1997.jpg"];

    const linkAnimesQuarta = ['https://www.anitube.vip/anime/mato-seihei-no-slave', 'https://www.anitube.vip/anime/shangri-la-frontier-kusoge-hunter-kamige-ni-idoman-to-su',"https://www.anitube.vip/anime/shaman-king-flowers"];
    if(taAparecendo == 0){
        //Area de cabeçalho
        conteudo.style.display = 'inline'
        titulo.innerText = 'Animes de Quarta-Feira'
        subtitulo1.style.display = 'block'
        subtitulo2.style.display = 'block'
        subtitulo3.style.display = 'block'

        //Inserindo intens dentro da section
        subtitulo1.innerText = subtitulosAnimesQuarta[0]
        banner1.style.backgroundImage ='url(' + imagensAnimesQuarta[0] + ')';
        banner1.style.display = 'block'
        link1.href = linkAnimesQuarta[0];
    
        subtitulo2.innerText = subtitulosAnimesQuarta[1]
        banner2.style.backgroundImage = 'url(' + imagensAnimesQuarta[1] + ')';
        banner2.style.display = 'block'
        link2.href = linkAnimesQuarta[1];

        subtitulo3.innerText = subtitulosAnimesQuarta[2]
        banner3.style.backgroundImage = 'url(' + imagensAnimesQuarta[2] + ')';
        banner3.style.display = 'block'
        link3.href = linkAnimesQuarta[2];

        conteudo.style.display = 'block'
        conteudoExtra.style.display = 'none';

        if(window.innerWidth <= 800 && taAparecendo === 0){
            let menu = document.getElementById('menu')
            menu.style.display = 'none'
        }
        taAparecendo +=1
    }else{
        conteudo.style.display = 'none'
        taAparecendo = 0
    }
}

function butqui(){
    const subtitulosAnimesQuinta = ['Akuyaku Reijou Level 99: Watashi wa Ura-Boss desu ga Maou dewa Arimasen\nEstúdio: Jumondo\nGêneros: Fantasia', 'Majo to Yajuu\nEstúdio: Yokohama Animation Lab\nGêneros: Ação Fantasia', 'Metallic Rouge\nEstúdio: Bones\nGêneros: Ação Sci-Fi'];
    const imagensAnimesQuinta = ['https://www.anitube.vip/media/categories/video/984d09774965045ada1662baec5abba4.jpg', 'https://www.anitube.vip/media/categories/video/dcc0d0b608ff9782e5495b222be50e00.jpg', 'https://www.anitube.vip/media/categories/video/97d5400491dfd0cdbbbc843db3e7e53b.jpg'];
    const linkAnimesQuinta = ['https://www.anitube.vip/anime/akuyaku-reijou-level-99-watashi-wa-ura-boss-desu-ga-maou-dewa-arimasen', 'https://www.anitube.vip/anime/majo-to-yajuu', 'https://www.anitube.vip/anime/metallic-rouge'];
    if(taAparecendo == 0){
        //Area de cabeçalho
        conteudo.style.display = 'inline'
        titulo.innerText = 'Animes de Quinta-Feira'
        subtitulo1.style.display = 'block'
        subtitulo2.style.display = 'block'
        subtitulo3.style.display = 'block'
        //Inserindo intens dentro da section
        subtitulo1.innerText = subtitulosAnimesQuinta[0]
        banner1.style.backgroundImage ='url(' + imagensAnimesQuinta[0] + ')';
        banner1.style.display = 'block'
        link1.href = linkAnimesQuinta[0];
    
        subtitulo2.innerText = subtitulosAnimesQuinta[1]
        banner2.style.backgroundImage = 'url(' + imagensAnimesQuinta[1] + ')';
        banner2.style.display = 'block'
        link2.href = linkAnimesQuinta[1];

        subtitulo3.innerText = subtitulosAnimesQuinta[2]
        banner3.style.backgroundImage = 'url('+ imagensAnimesQuinta[2] + ')';
        banner3.style.display = 'block'
        link3.href = linkAnimesQuinta[2];

        conteudo.style.display = 'block'
        conteudoExtra.style.display = 'none';
        if(window.innerWidth <= 800 && taAparecendo === 0){
            let menu = document.getElementById('menu')
            menu.style.display = 'none'
        }
        taAparecendo +=1
    }else{
        conteudo.style.display = 'none'
        taAparecendo = 0
    }
}
function butsex(){
    const subtitulosAnimesSexta = ["Ishura\nEstúdio: Passione\nGêneros: Ação Aventura Fantasia", "Chiyu Mahou no Machigatta Tsukaikata\nEstúdio:Shin-Ei Animation, Studio Add\nGêneros: Ação, Fantasia"];
    const imagensAnimesSexta = ["https://www.anitube.vip/media/categories/video/f6d51a1d32d50d00c1c18c4a10177b7a.jpg", "https://cdn.anicdn.net/media/categories/video/41c33878b38abbe1feadde0677581e06.jpg"];
    const linkAnimesSexta = ["https://www.anitube.vip/anime/ishura", "https://www.anitube.vip/anime/chiyu-mahou-no-machigatta-tsukaikata"];
    if(taAparecendo == 0){
        //Area de cabeçalho
        conteudo.style.display = 'inline'
        titulo.innerText = 'Animes de Sexta-Feira'
        subtitulo1.style.display = 'block'
        subtitulo2.style.display = 'block'
        //Inserindo intens dentro da section
        subtitulo1.innerText = subtitulosAnimesSexta[0]
        banner1.style.backgroundImage ='url(' + imagensAnimesSexta[0] + ')';
        banner1.style.display = 'block'
        link1.href = linkAnimesSexta[0];
    
        subtitulo2.innerText = subtitulosAnimesSexta[1]
        banner2.style.backgroundImage = 'url(' + imagensAnimesSexta[1] + ')';
        banner2.style.display = 'block'
        link2.href = linkAnimesSexta[1];

        conteudo.style.display = 'block'

        banner3.style.display = 'none'
        subtitulo3.innerText = ''

        conteudoExtra.style.display = 'none';

        if(window.innerWidth <= 800 && taAparecendo === 0){
            let menu = document.getElementById('menu')
            menu.style.display = 'none'
        }
        taAparecendo +=1
    }else{//Logica para esconder o conteudo quando clicar de novo 
        conteudo.style.display = 'none'
        taAparecendo = 0
    }
}
function butsab(){
    const subtitulosAnimesSabado = ["Solo Leveling\nEstúdio: A-1 Pictures\nGêneros: Ação, Aventura, Fantasia","Mashle: Magic and Muscles Season 2\n Estúdio: A-1 Pictures\nGêneros: Ação, Comédia, Fantasia" ];
    const imagensAnimesSabado = ["https://cdn.anicdn.net/media/categories/video/36dc63c846890690feb95783f34ab877.jpg", "https://cdn.anicdn.net/media/categories/video/84b580801c99a45fddeca9f3d89aa743.jpg"];
    const linkAnimesSabado = ["https://www.anitube.vip/download/anime/ore-dake-level-up-na-ken", "https://www.anitube.vip/download/anime/mashle-2nd-season"];
    if(taAparecendo == 0){
        //Area de cabeçalho
        conteudo.style.display = 'inline'
        titulo.innerText = 'Animes de Sabado'
        subtitulo1.style.display = 'block'
        subtitulo2.style.display = 'block'
        //Inserindo intens dentro da section
        subtitulo1.innerText = subtitulosAnimesSabado[0]
        banner1.style.backgroundImage ='url(' + imagensAnimesSabado[0] + ')';
        banner1.style.display = 'block'
        link1.href = linkAnimesSabado[0];
    
        subtitulo2.innerText = subtitulosAnimesSabado[1]
        banner2.style.backgroundImage = 'url(' + imagensAnimesSabado[1] + ')';
        banner2.style.display = 'block'
        link2.href = linkAnimesSabado[1];

        conteudo.style.display = 'block'

        banner3.style.display = 'none'
        subtitulo3.innerText = ''
        
        conteudoExtra.style.display = 'none';

        if(window.innerWidth <= 800 && taAparecendo === 0){
            let menu = document.getElementById('menu')
            menu.style.display = 'none'
        }
        taAparecendo +=1
    }else{//Logica para esconder o conteudo quando clicar de novo 
        conteudo.style.display = 'none'
        taAparecendo = 0
    }

}
function butdom(){
    const subtitulosAnimesDomingo = ["One Piece🏴‍☠️\nAutor: Eiichiro Oda\nDireção: Konosuke Uda\nEstúdio: Toei Animation\nStatus: Infinito\nGêneros: Ação Aventura Comédia Drama Fantasia Shounen Superpoder"];
    const imagensAnimesDomingo = ["https://pbs.twimg.com/media/F_0mcEtWEAAVPCm?format=jpg&name=900x900"];
    const linkAnimesDomingo = ["https://www.anitube.vip/anime/398a5cebfadb2606fbf802b42aad57755b4eae55"];
    if(taAparecendo == 0){
        //Area de cabeçalho
        conteudo.style.display = 'inline'
        titulo.innerText = 'Animes de Domingo'
    
        //Inserindo intens dentro da section
        subtitulo1.innerText = subtitulosAnimesDomingo[0]
        subtitulo1.style.display = 'block'
        banner1.style.backgroundImage ='url(' + imagensAnimesDomingo[0] + ')';
        banner1.style.display = 'block'
        link1.href = linkAnimesDomingo[0];
        conteudo.style.display = 'block'

        banner2.style.display = 'none'
        subtitulo2.innerText = ''
        
        banner3.style.display = 'none'
        subtitulo3.innerText = ''

        conteudoExtra.style.display = 'none';
        
        if(window.innerWidth <= 800 && taAparecendo === 0){
            let menu = document.getElementById('menu')
            menu.style.display = 'none'
        }
        taAparecendo +=1
    }else{//Logica para esconder o conteudo quando clicar de novo 
        conteudo.style.display = 'none'
        taAparecendo = 0
    }

}
function butextra(){

    let bannerExtra = document.querySelectorAll('[id^="conteudo-extra-"]');
    let subtituloExtra = document.querySelectorAll('[id^="subtitulo-extra-"]');
    let linkExtra = document.querySelectorAll('[id^="link-extra-"]');
    
    const imagensAnimesExtra=["https://www.anitube.vip/media/categories/video/3bd5574cdf7eaa90415f09d4aab9aa9b22.jpg", "https://www.anitube.vip/media/categories/video/dce178cbb76fa42d44cb3e993e9fcaef.jpg"];
    const subtitulosAnimesExtra=["Bastard\nAutor: Kazushi Hagiwara\nDireção: Takaharu Ozaki\nEstúdio: LIDENFILMS\nGêneros: Ação Aventura Comédia Ecchi Fantasia Seinen"];
    const linkAnimesExtra = ["https://www.anitube.vip/anime/bastard-ankoku-no-hakaishin-ona"];
    //Tentar fazer um comando de repetição para mostra todos os conteudos extra sem precisar de muitas linhas.
    let contador = 0

    if(taAparecendo == 0){

        conteudo.style.display = 'inline'
        conteudoExtra.style.display = 'inline';

        let titulo = document.getElementById('titulo')
        titulo.innerText = 'Animes de Extra'

        banner1.style.display = 'none'
        subtitulo1.style.display = "none"

        banner2.style.display = 'none'
        subtitulo2.style.display = "none"
        
        banner3.style.display = 'none'
        subtitulo3.style.display = 'none'

        
        for (let i = 0; i < bannerExtra.length; i++){
            bannerExtra[i].style.backgroundImage ='url(' + imagensAnimesExtra[0] + ')';
            subtituloExtra[i].textContent = subtitulosAnimesExtra[0]; // Se você tem apenas um subtítulo, pode usar apenas o primeiro elemento.
            linkExtra[i].href = linkAnimesExtra[0];
            //contador += 1
        }

        if(window.innerWidth <= 800 && taAparecendo === 0){
            let menu = document.getElementById('menu')
            menu.style.display = 'none'
        }

        taAparecendo +=1
    }else{
        conteudo.style.display = 'none'
        taAparecendo = 0;
    }
}