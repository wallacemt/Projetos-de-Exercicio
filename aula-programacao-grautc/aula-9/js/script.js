function somar(){
    let num1 = document.querySelector("#n1").value;
    let num2 = document.querySelector("#n2").value;
    let res = document.querySelector('#res');

    num1 = Number(num1);
    num2 = Number(num2);
    let resposta = num1 + num2

    res.innerHTML = (`O resultado da soma entre ${num1} + ${num2} = ${resposta}`);
}

// let nome = window.prompt("Qual seu nome?")
// document.write(`Ola ${nome}, seu nome tem ${nome.length} letras <br>`)
// document.write(`Seu nome em maiusculo é ${nome.toUpperCase()} <br>`)
// document.write(`Seu nome em minusculo é ${nome.toLowerCase()} <br>`)

let n1 = 76.666679

//window.alert(n1)

//window.alert(n1.toFixed(2))

//window.alert(n1.toFixed(2).replace(".", ","))

n1 = n1.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})

window.alert(n1)

