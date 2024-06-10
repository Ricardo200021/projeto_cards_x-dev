/**
 * Objetivo 1: quando clicarmos na seta de avançar tem que mostrar o próximo cartão da lista
 * 
 * 1° passo: pegar o elemento html da seta avançar
 * 2° passo: identificar o clique do usuário na seta avançar
 * 3° passo: fazer aparecer o próximo cartão da lista
 * 4° passo: buscar o cartão que está selecionado e esconder
 * 
 * Objetivo 2: quando clicarmos na seta voltar temos que mostrar o cartão anterior da lista
 * 
 * 1° passo: pegar o elemento html da seta voltar
 * 2° passo: identificar o clique do usuário na seta voltar
 * 3° passo: fazer aparecer o cartão anterior da lista
 * 4° passo: buscar o cartão que está selecionado e esconder
 * 
 */


// Objetivo 1: quando clicarmos na seta de avançar tem que mostrar o próximo cartão da lista
 // 1° passo: pegar o elemento html da seta avançar
 //console.log(document.getElementById("btn-avancar")); para testar no console
 const btnAvancar = document.getElementById("btn-avancar");

  // 1° passo: pegar o elemento html da seta voltar
 const btnVoltar = document.getElementById("btn-voltar");
 let cartaoAtual = 0;
 const cartoes = document.querySelectorAll(".cartao");

 //2° passo: identificar o clique do usuário na seta avançar
 btnAvancar.addEventListener("click", function(){
    if(cartaoAtual === cartoes.length - 1) return;
    
    //4° passo: buscar o cartão que está selecionado e esconder
    esconderCartoesSelecionado(); //Esta função foi refatorada

    //3° passo: fazer aparecer o cartão anterior da lista  
    cartaoAtual++;
        mostrarCartao();
 });



 //Objetivo 2: quando clicarmos na seta voltar temos que mostrar o cartão anterior da lista
 //2° passo: identificar o clique do usuário na seta voltar
 btnVoltar.addEventListener("click", function(){
    
    if(cartaoAtual === 0) return;

    //4° passo: buscar o cartão que está selecionado e esconder
    esconderCartoesSelecionado();

    //3° passo: fazer aparecer o próximo cartão da lista
    cartaoAtual--;
    mostrarCartao();

 });

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoesSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

