const inputProduto = document.getElementById("produto");
const inputPreco = document.getElementById("preco");
const botao = document.getElementById("cadastrar");
const vitrine = document.getElementById("vitrine");

botao.addEventListener("click", () => {
    const nome = inputProduto.value;
    const preco = inputPreco.value;

    const elemento = document.createElement("p");
    elemento.textContent = `Produto: ${nome} - R$${preco}`;
    elemento.classList.add("produto");

    vitrine.appendChild(elemento);

    inputProduto.value = "";
    inputPreco.value = "";

});