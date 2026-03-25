const botaoAdicionar = document.getElementById("botao-adicionar");
const lista = document.getElementById("lista");

botaoAdicionar.addEventListener("click", () => {

    // criar o item (elemento li filho do elemento ul)
    // cria uma tag li, mas ainda não usa ela
    const li = document.createElement("li"); 

    // criar o texto (elemento p)
    const texto = document.createElement("p");
    texto.innerText = "Novo item";

    // criar botão de lixeira
    const botaoLixeira = document.createElement("button");
    botaoLixeira.innerText = "🗑️"; // windows + "." abre os emojis

    botaoLixeira.style.border = "none"; // tira a borda do botão de lixeira
    botaoLixeira.style.cursor = "pointer"; // quando passa o mouse em cima, vira mãozinha
    botaoLixeira.style.backgroundColor = "none"; // retira a cor de fundo

    // ação de remover o elemento da lista
    botaoLixeira.addEventListener("click", () => {
        li.remove();
    })

    li.appendChild(texto);
    li.appendChild(botaoLixeira);

    lista.appendChild(li);

})