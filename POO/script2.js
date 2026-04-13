class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    mostrarProduto(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: ${this.preco}`);
    }
}

const produto1 = new Produto("Arroz", 5);
const produto2 = new Produto("Azeite", 10);

produto1.mostrarProduto();
produto2.mostrarProduto();