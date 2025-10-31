alert("Saiba qual Vinho combina vom voçê!")
 
 
const perguntas= [
 {
    pergunta:"Pergunta numero 1?\n Opcao A) A\n Opcao B) B\n Opcao C) C\n",
    resposta:"A"
 },
 {
    pergunta:"Pergunta numero 2?\n Opcao A) A\n Opcao B) B\n Opcao C) C\n",
    resposta:"B"
 },
 {
    pergunta:"Pergunta numero 3?\n Opcao A) A\n Opcao B) B\n Opcao C) C\n",
    resposta:"C"
 },
 
];
 
//declarando a variavel de acertos que recebe 0
let acertos = 0;
 
// criar um laço de repetição para verificar as perguntas
 
for(let i=0; i<perguntas.length;i++){
    const respostaUsuario=prompt(perguntas[i].pergunta);
 
    //verifica se o que o usuario digitou for minusculo e se não for converte para ser
    if(respostaUsuario.toLowerCase() === perguntas[i].resposta.toLocaleLowerCase()){
        acertos++;
    }
}
document.getElementById("msg").innerHTML=(`Você aceretou ${acertos} de ${perguntas.length} perguntas`)