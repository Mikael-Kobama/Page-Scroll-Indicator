// Seleciona o elemento HTML que representa o indicador de progresso da rolagem
let indicator = document.querySelector(".scroll-indicator .progress");

// Calcula a altura total da página que pode ser rolada (scrollHeight) subtraindo a altura visível da página (clientHeight)
let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

// Adiciona um ouvinte de evento para o evento 'scroll' na janela, que chama a função 'scroll' sempre que a rolagem acontece
window.addEventListener("scroll", scroll);

// Função chamada sempre que o evento de rolagem ocorre
function scroll() {
  // Obtém a distância rolada (em pixels) do topo da página
  let scrollTop = document.documentElement.scrollTop;
  
  // Calcula a porcentagem da rolagem em relação ao total possível, multiplicando pela altura da página
  let scrolled = (scrollTop / scrollHeight) * 100;
  
  // Define a largura do indicador de progresso para a porcentagem calculada
  indicator.style.width = `${scrolled}%`;
}
