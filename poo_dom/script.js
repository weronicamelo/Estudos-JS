class CardProduto{
    constructor(nome, preco, container){
        this.nome = nome;
        this.preco = preco;
        this.container = document.querySelector(container);
    }

    render(){
        this.container.innerHTML +=  `
        <div class="card">
            <h3>${this.nome}</h3>
            <p>R$${this.preco}</p>
        </div>
        `;
    }
}

const btn = document.querySelector("#btn");
const nomeProduto = document.querySelector("#nomeProduto")
const precoProduto = document.querySelector("#preco");
const produtos = [];

btn.addEventListener("click", () => {
    const nome = nomeProduto.value;
    const preco = precoProduto.value;

    const card = new CardProduto(nome, preco, "#produtos");
    produtos.unshift(card);
    card.container.innerHTML = "";

    for(let produto of produtos){
        produto.render();
    }

    nomeProduto.value = "";
    precoProduto.value = "";
});


