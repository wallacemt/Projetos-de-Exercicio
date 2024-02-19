var conteudo = document.getElementById('conteudo');

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
        let titulo = document.getElementById('titulo')
        titulo.innerText = 'Animes de Segunda-Feira'
    
        //Inserindo intens dentro da section
        subtitulo1.innerText = subtitulosAnimesSegunda[0]
        banner1.style.backgroundImage ='url(' + imagensAnimesSegunda[0] + ')';
        link1.href = linkAnimesSegunda[0];
        
        subtitulo2.innerText = subtitulosAnimesSegunda[1]
        banner2.style.backgroundImage = 'url(' + imagensAnimesSegunda[1] + ')';
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
        let titulo = document.getElementById('titulo')
        titulo.innerText = 'Animes de Terça-Feira'
    
        //Inserindo intens dentro da section
        subtitulo1.innerText = subtitulosAnimesTerca[0]
        banner1.style.backgroundImage ='url(' + imagensAnimesTerca[0] + ')';
        link1.href = linkAnimesTerca[0];
    
        subtitulo2.innerText = subtitulosAnimesTerca[1]
        banner2.style.backgroundImage = 'url(' + imagensAnimesTerca[1] + ')';
        link2.href = linkAnimesTerca[1];

        conteudo.style.display = 'block'

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
    const subtitulosAnimesQuarta = ["Estúdio: Seven Arcs\nStatus: Em Progresso\nGêneros: Ação Ecchi Fantasia", "Autor: Ryousuke Fuji e Katarina\nDireção: Toshiyuki Kubooka\nEstúdio: C2C\nGêneros: Ação Aventura Fantasia Jogos Shounen"];
    const imagensAnimesQuarta = ["https://www.anitube.vip/media/categories/video/5d9539763ee2a79091013e3792bbf267.jpg", "https://www.anitube.vip/media/categories/video/e5bb61f161dadfca4ebe6d6016a94462940.jpg"];
    const linkAnimesQuarta = ['https://www.anitube.vip/anime/mato-seihei-no-slave', 'https://www.anitube.vip/anime/shangri-la-frontier-kusoge-hunter-kamige-ni-idoman-to-su'];
    if(taAparecendo == 0){
        //Area de cabeçalho
        conteudo.style.display = 'inline'
        let titulo = document.getElementById('titulo')
        titulo.innerText = 'Animes de Quarta-Feira'
    
        //Inserindo intens dentro da section
        subtitulo1.innerText = subtitulosAnimesQuarta[0]
        banner1.style.backgroundImage ='url(' + imagensAnimesQuarta[0] + ')';
        link1.href = linkAnimesQuarta[0];
    
        subtitulo2.innerText = subtitulosAnimesQuarta[1]
        banner2.style.backgroundImage = 'url(' + imagensAnimesQuarta[1] + ')';
        link2.href = linkAnimesQuarta[1];

        conteudo.style.display = 'block'

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

function butqui(){
    const subtitulosAnimesQuinta = ['Akuyaku Reijou Level 99: Watashi wa Ura-Boss desu ga Maou dewa Arimasen\nEstúdio: Jumondo\nGêneros: Fantasia', 'Majo to Yajuu\nEstúdio: Yokohama Animation Lab\nGêneros: Ação Fantasia', 'Metallic Rouge\nEstúdio: Bones\nGêneros: Ação Sci-Fi'];
    const imagensAnimesQuinta = ['https://www.anitube.vip/media/categories/video/984d09774965045ada1662baec5abba4.jpg', 'https://www.anitube.vip/media/categories/video/dcc0d0b608ff9782e5495b222be50e00.jpg', 'https://www.anitube.vip/media/categories/video/97d5400491dfd0cdbbbc843db3e7e53b.jpg'];
    const linkAnimesQuinta = ['https://www.anitube.vip/anime/akuyaku-reijou-level-99-watashi-wa-ura-boss-desu-ga-maou-dewa-arimasen', 'https://www.anitube.vip/anime/majo-to-yajuu', 'https://www.anitube.vip/anime/metallic-rouge'];
    if(taAparecendo == 0){
        //Area de cabeçalho
        conteudo.style.display = 'inline'
        let titulo = document.getElementById('titulo')
        titulo.innerText = 'Animes de Quinta-Feira'
    
        //Inserindo intens dentro da section
        subtitulo1.innerText = subtitulosAnimesQuinta[0]
        banner1.style.backgroundImage ='url(' + imagensAnimesQuinta[0] + ')';
        link1.href = linkAnimesQuinta[0];
    
        subtitulo2.innerText = subtitulosAnimesQuinta[1]
        banner2.style.backgroundImage = 'url(' + imagensAnimesQuinta[1] + ')';
        link2.href = linkAnimesQuinta[1];

        subtitulo3.innerText = subtitulosAnimesQuinta[2]
        banner3.style.backgroundImage = 'url('+ imagensAnimesQuinta[2] + ')';
        banner3.style.display = 'block'
        link3.href = linkAnimesQuinta[2];

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