function butseg(){
    const subtitulosAnimesSegunda=[
    "Kekkon Yubiwa Monogatari Temporada: Inverno 2024 Estúdio: Staple Entertainment Status: Em Progresso Gêneros: Ação Ecchi Fantasia Romance"];
    const imagensAnimesSegunda=["https://www.anitube.vip/media/categories/video/32cc64407f53842cdef8a3f482a22410.jpg"];

    let banner = document.getElementById('conteudo-1');
    let subtitulo = document.getElementById('subtitulo');
    subtitulo.innerText = subtitulosAnimesSegunda[0]
    banner.style.backgroundImage ='url(' + imagensAnimesSegunda[0] + ')';

}