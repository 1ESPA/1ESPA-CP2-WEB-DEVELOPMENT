document.addEventListener('DOMContentLoaded', function () {
  const imagens = document.querySelectorAll('.carrossel-imagens img');
  const btnAnterior = document.querySelector('.anterior');
  const btnProximo = document.querySelector('.proximo');
  let indice = 0;
  let intervalo;

  function mostrarImagem(index) {
    imagens.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }

  function proximaImagem() {
    indice = (indice + 1) % imagens.length;
    mostrarImagem(indice);
  }

  function imagemAnterior() {
    indice = (indice - 1 + imagens.length) % imagens.length;
    mostrarImagem(indice);
  }

  function iniciarCarrossel() {
    intervalo = setInterval(proximaImagem, 3000); 
  }


  function reiniciarCarrossel() {
    clearInterval(intervalo);
    iniciarCarrossel();
  }


  btnProximo.addEventListener('click', () => {
    proximaImagem();
    reiniciarCarrossel();
  });

  btnAnterior.addEventListener('click', () => {
    imagemAnterior();
    reiniciarCarrossel();
  });

 
  mostrarImagem(indice);
  iniciarCarrossel();
});
