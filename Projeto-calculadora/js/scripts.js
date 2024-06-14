const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    //adiciona o digito a tela
    addDigit(digit){
        //verifica se a operacao ja tem ponto
        if(digit === "." && this.currentOperationText.innerText.includes(".")){
            return;
        } 
        this.currentOperation = digit;
        this.updateScreen();
    }

    //Processo de toda operacao da calculadora
    processOperation(operation){
        //verificar se o valor atual ta vazio
        if(this.currentOperationText.innerText === "" && operation !== "C"){
            if(this.previousOperationText.innerText !== ""){
                this.changeOperation(operation);
            }
            return;
        }

        //pegando a op atual e o valor anterior
        let operationValue;
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText;

        switch(operation){
            case "+":
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "-":
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "*":
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "/":
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case "DEL":
                this.processDelOperation();
                break
            case"CE":
                this.processClearOperation();
                break
            case"C":
                this.processClearAllOperation();
                break
            case "=":
                this.processEqualOperation();
            default:
                return;
        }
    }

    //carregando os valores na tela
    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
    ){
        if(operationValue === null){
            this.currentOperationText.innerText += this.currentOperation;
        }else{
            //Checar se o valor e zero, se for apenas adicione o valor atual
            if(previous === 0){
                operationValue = current;
            }
            // adiciona o valor atual no valor anterior
            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = "";
        }
    }

    //Mudar operacao matematia
    changeOperation(operation){
        const mathOperations = ["*", "/", "+", "-" ]

        if(!mathOperations.includes(operation)){
            return
        }
        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
    }

    //deleta o ultimo digito
    processDelOperation(){
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
    }

    //deleta a operacao
    processClearOperation(){
        this.currentOperationText.innerText = ""
    }

    //limpa toda a operacao
    processClearAllOperation(){
        this.currentOperationText.innerText = ""
        this.previousOperationText.innerText = ""
    }

    //mostra apenas o resultado
    processEqualOperation(){
        const operation = previousOperationText.innerText.split(" ")[1]
        this.processOperation(operation)
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if(+value >= 0 || value === "."){
            calc.addDigit(value)
        }else{
           calc.processOperation(value)
        }
    })
});