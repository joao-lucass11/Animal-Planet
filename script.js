// 1. Seleciona os elementos que vamos usar
let botaoMenu = document.querySelector("#btn-menu");
let menu = document.querySelector(".nav");

// 2. Escuta o evento de clique no botão
botaoMenu.addEventListener("click", function () {

    // 3. Liga/desliga a classe "ativo" no menu
    menu.classList.toggle("ativo");

});
