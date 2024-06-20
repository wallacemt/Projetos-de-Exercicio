const characterAll = document.querySelectorAll(".personagem")

characterAll.forEach(character => {
    character.addEventListener("mouseenter", () => {

        if(window.innerWidth < 450){
            window.scrollTo({top:0, behavior: 'smooth'});
        }

        const characterCheck = document.querySelector(".selecionado");
        characterCheck.classList.remove("selecionado");
        character.classList.add("selecionado")
        
        const chekedCharacterImg = document.querySelector(".personagem-grande")
        
        const idCharacter = character.attributes.id.value 

        chekedCharacterImg.src = `./src/imagens/card-${idCharacter}.png`;

        const titleCharacter = document.querySelector("#nome-personagem")

        titleCharacter.innerText = character.getAttribute("data-name")

        const descCharacter = document.querySelector("#descricao-personagem")

        descCharacter.innerHTML = character.getAttribute("data-description");
    })
})