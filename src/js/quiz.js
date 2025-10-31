
const perguntas = [
  {
    pergunta: "Qual sabor você prefere?",
    opcoes: ["Doce", "Seco", "Frutado", "Amargo"],
    resposta: "Frutado"
  },
  {
    pergunta: "Com qual ocasião você mais combina?",
    opcoes: ["Jantar romântico", "Churrasco", "Festa entre amigos", "Relaxar em casa"],
    resposta: "Jantar romântico"
  },
  {
    pergunta: "Qual tipo de comida você mais gosta?",
    opcoes: ["Massas", "Carnes vermelhas", "Peixes", "Sobremesas"],
    resposta: "Massas"
  },
  {
    pergunta: "Você prefere vinhos:",
    opcoes: ["Tintos", "Brancos", "Rosés", "Espumantes"],
    resposta: "Tintos"
  },
  {
    pergunta: "Qual palavra te define melhor?",
    opcoes: ["Elegante", "Descontraído", "Aventureiro", "Tradicional"],
    resposta: "Elegante"
  }
];

const quizContainer = document.getElementById("quiz");


let indicePergunta = 0;
let pontuacao = 0;


function mostrarPergunta() {
  if (indicePergunta < perguntas.length) {
    const perguntaAtual = perguntas[indicePergunta];
    quizContainer.innerHTML = `
      <div class="quiz-card">
        <h2>${perguntaAtual.pergunta}</h2>
        <div class="opcoes">
          ${perguntaAtual.opcoes
            .map(
              (opcao) =>
                `<button class="btn-opcao" onclick="verificarResposta('${opcao}')">${opcao}</button>`
            )
            .join("")}
        </div>
      </div>
    `;
  } else {
    mostrarResultado();
  }
}


function verificarResposta(opcaoSelecionada) {
  const perguntaAtual = perguntas[indicePergunta];
  if (opcaoSelecionada === perguntaAtual.resposta) {
    pontuacao++;
  }
  indicePergunta++;
  mostrarPergunta();
}


function mostrarResultado() {
  let mensagem = "";

  if (pontuacao <= 2) {
    mensagem = "Você combina com vinhos **suaves e leves**, ideais para momentos descontraídos.";
  } else if (pontuacao <= 4) {
    mensagem = "Você combina com vinhos **refinados e equilibrados**, perfeitos para um jantar especial.";
  } else {
    mensagem = "Você é um verdadeiro apreciador — vinhos **encorpados e marcantes** são a sua cara!";
  }

  quizContainer.innerHTML = `
    <div class="quiz-resultado">
      <h2>🍷 Resultado do Quiz</h2>
      <p>${mensagem}</p>
      <button class="btn-reiniciar" onclick="reiniciarQuiz()">Tentar novamente</button>
    </div>
  `;
}


function reiniciarQuiz() {
  indicePergunta = 0;
  pontuacao = 0;
  mostrarPergunta();
}


mostrarPergunta();
