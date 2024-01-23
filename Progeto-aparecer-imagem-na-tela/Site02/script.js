function exibirImagem() {
    var inputUrl = document.getElementById("imageInput");
    var imageUrl = inputUrl.value;
    if (imageUrl) {
        var imagemExibida = document.getElementById("imagemExibida");
        imagemExibida.innerHTML = "<img src='" + imageUrl + "' alt='Imagem Exibida'>";
    } else {
        alert("Digite um URL de imagem válido.");
    }
}