// Declaração de variáveis
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
let actualQuestion = 0;

// Perguntas
const questions = [
  {
    "question": "PHP foi desenvolvido para qual fim?",
    "answers": [
      {
        "answer": "back-end",
        "correct": true
      },
      {
        "answer": "front-end",
        "correct": false
      },
      {
        "answer": "Sistema operacional",
        "correct": false
      },
      {
        "answer": "Banco de dados",
        "correct": false
      },
    ],
    "img": "https://files.tecnoblog.net/wp-content/uploads/2021/01/o_que_e_php_unsplash.jpg"
  },
  {
    "question": "Uma forma de declarar variável em JavaScript:",
    "answers": [
      {
        "answer": "$var",
        "correct": false
      },
      {
        "answer": "var",
        "correct": true
      },
      {
        "answer": "@var",
        "correct": false
      },
      {
        "answer": "#let",
        "correct": false
      },
    ],
    "img": "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg"
  },
  {
    "question": "Qual o seletor de id no CSS?",
    "answers": [
      {
        "answer": "#",
        "correct": true
      },
      {
        "answer": ".",
        "correct": false
      },
      {
        "answer": "@",
        "correct": false
      },
      {
        "answer": "/",
        "correct": false
      },
    ],
    "img": "https://www.showmetech.com.br/wp-content/uploads//2020/10/dicas-de-CSS-e1620852882761-1920x1024.jpg"
  },
  {
    "question": "O que significa a sigla 'HTML'? ",
    "answers": [
      {
        "answer": "HyperText Markdown Language",
        "correct": false
      },
      {
        "answer": "HyperText Markup Language",
        "correct": true
      },
      {
        "answer": "HighText Markup Language",
        "correct": false
      },
      {
        "answer": " HyperTool Multi Language",
        "correct": false
      },
    ],
    "img": "https://neilpatel.com/wp-content/uploads/2017/12/codigos-html-para-paginas-web.jpeg"
  },
  {
    "question": "Qual desses não é um tipo de loop em Python'? ",
    "answers": [
      {
        "answer": "for",
        "correct": false
      },
      {
        "answer": "while",
        "correct": false
      },
      {
        "answer": "foreach",
        "correct": true
      },
      {
        "answer": "do-while",
        "correct": false
      },
    ],
    "img": "https://ltecnologia.com.br/blog/wp-content/uploads/2021/09/30_01_20-Python-uma-linguagem-de-programacao-para-favorecer-a-legibilidade-do-codigo.jpg"
  },
]

// Substituição do layout pela primeira questão
function init() {
  createQuestion(0)
}

// Create a question 
function createQuestion(i) {

  // Limpa questão anterior
  const oldButtons = answersBox.querySelectorAll("button");

  oldButtons.forEach(function(btn) {
    btn.remove();
  });

  //adiciona a imagem
  let questionImg = document.getElementById("question-img");
  questionImg.style.backgroundImage ='url(' + questions[i].img + ')';

  // Altera texto da pergunta
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // Insere alternativas
  questions[i].answers.forEach(function(answer, i) {
    

    // Altera texto do template
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // remove classe de hide e template do template
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // Insere template na tela
    answersBox.appendChild(answerTemplate);

    //inserir um evento de click no botao
    answerTemplate.addEventListener("click", function(){
      checkAnswer(this)
    })

  });


  // Incrementa o número atual de questões
  actualQuestion++;

}

//Verificando Resposta do Usuario
function checkAnswer(btn){

  //Seleciona todos os botoes
  const buttons = answersBox.querySelectorAll("button");

  //verifica se a resposta e a certa e adiciona classes no botão
  buttons.forEach(function(button){

    if(button.getAttribute("correct-answer") == "true"){

      button.classList.add("correct-answer");

      //checa se o usuario acerto a pergunta
      if(btn === button) {
        //incrementa pontos
        points++;
      }
    } else {

      button.classList.add("wrong-answer");

    }
  });
  
  // Exibir proxima pergunta
  nextQuestion();
}

function nextQuestion(){
  //timer para o usuario ver as respostas
  setTimeout(function(){
    if(actualQuestion >= questions.length){
      //apresenta a msg de sucesso
      showSucessMessage();
      return;
    }
    createQuestion(actualQuestion);
    
  }, 1300);
  
}

// Exibe a tela final
function showSucessMessage() {
  hideeOrShowQuizz();
  
  
  //trocar dados da tela de sucesso
  //calcular o score
  const score = ((points / questions.length) * 100).toFixed(2);
  
  const displayScore = document.querySelector("#display-score span");
  
  
  displayScore.textContent = score.toString();
  
  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;
  
  //alterar o total de perguntas
  const questionqty = document.querySelector("#questions-qty");
  questionqty.textContent = questions.length;
  
  //mostra img de vitoria
  let scoreImg = document.getElementById("img-score");
  let msgResultado = document.getElementById("result")
  if(score > 90){
    scoreImg.style.backgroundImage = 'url(https://itunes.apple.com/app/apple-store/id917932200?pt=39040802&ct=Media1GIFV2&mt=8)';
  }else if(score >= 50 && score <= 90){
    scoreImg.style.backgroundImage = 'url(https://c.tenor.com/VTTHQZmJSUUAAAAC/tenor.gif)';
    msgResultado.innerText = "Podia ter sido melhor..."
  }else{
    scoreImg.style.backgroundImage = 'url(https://c.tenor.com/80qRd3Ge0z4AAAAd/tenor.gif)';
    msgResultado.innerText = "Decepcionante..."
  }
}

//mostrar ou esconder o score

function hideeOrShowQuizz(){
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
};

// Reiniciar Quizz
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function(){

  //zerar o jogo
  actualQuestion = 0;
  points = 0;
  hideeOrShowQuizz();
  init();
})

// Inicialização
init();


