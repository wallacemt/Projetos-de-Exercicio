function butseg(){
    const subtitulosAnimesSegunda=[
    "Kekkon Yubiwa Monogatari\n Temporada: Inverno 2024\n Estúdio: Staple Entertainment\n Status: Em Progresso\n Gêneros: Ação Ecchi Fantasia Romance", "Bucchigiri?\nTemporada: Inverno 2024\nEstúdio: MAPPA\nGêneros: Ação"];
    const imagensAnimesSegunda=["https://www.anitube.vip/media/categories/video/32cc64407f53842cdef8a3f482a22410.jpg", "https://cdn.anicdn.net/media/categories/video/8693722045353926369c8e7ab8a5ff3e.jpg"];

    let conteudo = document.getElementById('conteudo')
    conteudo.style.display = 'inline'
    let titulo = document.getElementById('titulo')
    titulo.innerText = 'Animes de Segunda-Feira'
    let banner1 = document.getElementById('conteudo-1');
    let subtitulo1 = document.getElementById('subtitulo');
    subtitulo1.innerText = subtitulosAnimesSegunda[0]
    banner1.style.backgroundImage ='url(' + imagensAnimesSegunda[0] + ')';
    
    let banner2 = document.createElement('div');
    banner2.className = 'conteudo-item';
    banner2.id = 'conteudo-1'
    let subtitulo2 = document.createElement('p');
    subtitulo2.id = 'subtitulo'
    subtitulo2.innerText = subtitulosAnimesSegunda[1];
    let imagem2 = document.createElement('img');
    imagem2.src =imagensAnimesSegunda[1];

    conteudo.appendChild(banner2);
    banner2.appendChild(imagem2);
    banner2.appendChild(subtitulo2);
}