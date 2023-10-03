/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente
      
*/

// passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles

const button = document.querySelectorAll('.button');

//OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem

const character = document.querySelectorAll(".character");

button.forEach((button, indice) => {
  button.addEventListener("click", () => {

    //   passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover 
    // a seleção dele 

    desselecionarButton();

    // passo 2 - adicionar a classe "selecionado" no botão que o usuário clic

    button.classList.add("selected");

    //passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
    // a seleção dele 

    desselecionarCharacter();

    //passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou

    character[indice].classList.add("selected");
  });
});

function desselecionarCharacter() {
  const characterSelected = document.querySelector(".character.selected");
  characterSelected.classList.remove("selected");
}

function desselecionarButton() {
  const buttonSelected = document.querySelector(".button.selected");
  buttonSelected.classList.remove("selected");
}

