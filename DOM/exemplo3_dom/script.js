const produtos = ["Mouse", "Teclado", "Monitor"];
const botao = document.getElementById("btn");
const lista = document.getElementById("produtos");
const carregar = document.getElementById("loading");

botao.addEventListener("click", () => {
    lista.innerHTML = "";

    carregar.textContent = "Carregando...";
    document.body.style.cursor = "wait";
    botao.style.cursor = "progress";

    setTimeout(() => {
        carregar.textContent = "";
        document.body.style.cursor = "default";
        botao.style.cursor = "pointer";

        produtos.forEach(produto => {
            const li = document.createElement("li")
            li.innerText = produto;
            li.classList.add("list")
            lista.appendChild(li);
        })
    }, 3000);
})