function butseg(){
    const subtitulosAnimesSegunda=[
    "Kekkon Yubiwa Monogatari\n Temporada: Inverno 2024\n Estúdio: Staple Entertainment\n Status: Em Progresso\n Gêneros: Ação Ecchi Fantasia Romance", "Bucchigiri?\nTemporada: Inverno 2024\nEstúdio: MAPPA\nGêneros: Ação", "Undead Unluck\n Temporada: Outono 2023\nAutor: Yoshifumi Tozuka\nDireção: Yuuki Yase\n Estúdio: David Production\n Gêneros: Ação, Comédia, Shounen, Sobrenatural, Superpoder"];

    const imagensAnimesSegunda=["https://www.anitube.vip/media/categories/video/32cc64407f53842cdef8a3f482a22410.jpg", "https://cdn.anicdn.net/media/categories/video/8693722045353926369c8e7ab8a5ff3e.jpg", "https://cdn.anicdn.net/media/categories/video/95769d5e5d2d94eb3d1f1381915f876d731.jpg"];
    //Area de cabeçalho
    let conteudo = document.getElementById('conteudo')
    conteudo.style.display = 'inline'
    let titulo = document.getElementById('titulo')
    titulo.innerText = 'Animes de Segunda-Feira'

    //Inserindo intens dentro da section
    let banner1 = document.getElementById('conteudo-1');
    let subtitulo1 = document.getElementById('subtitulo-1');
    subtitulo1.innerText = subtitulosAnimesSegunda[0]
    banner1.style.backgroundImage ='url(' + imagensAnimesSegunda[0] + ')';

    let banner2 = document.getElementById('conteudo-2')
    let subtitulo2 = document.getElementById('subtitulo-2')
    subtitulo2.innerText = subtitulosAnimesSegunda[1]
    banner2.style.backgroundImage = 'url(' + imagensAnimesSegunda[1] + ')';

    let banner3 = document.getElementById('conteudo-3')
    let subtitulo3 = document.getElementById('subtitulo-3')
    subtitulo3.innerText = subtitulosAnimesSegunda[2]
    banner3.style.backgroundImage = 'url('+ imagensAnimesSegunda[2] + ')';

}