class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    atualizarPreco(novoPreco){
        this.preco = novoPreco;
        console.log(`\nPreco de ${this.nome} atualizado para R$ ${this.preco}`);
    }

    adicionarEstoque(quantidade){
        this.quantidade += quantidade;
        console.log(`${quantidade} unidades adicionadas. Total: ${this.quantidade}`)
    } 

    vender(quantidade){
        if (quantidade <= this.quantidade) {
            this.quantidade -= quantidade;
            console.log(`\nVenda realizada: ${quantidade} unidade(s) de ${this.nome}`);
        } else {
            console.log(`Estoque insuficiente de ${this.nome}`);
        }
    }

    exibirInfo(){
        console.log(`O produto ${this.nome} custa R$ ${this.preco} e restam ${this.quantidade} unidades`)

    }
}

const produto1 = new Produto("Arroz", 10, 2);
const produto2 = new Produto("Feijão", 8, 1);
const produto3 = new Produto("Macarrão", 5, 4);

produto1.exibirInfo();
produto1.vender(1);
produto1.exibirInfo();

produto2.adicionarEstoque(5);
produto2.atualizarPreco(7);
produto2.exibirInfo();

produto3.atualizarPreco(8);
produto3.vender(3);
produto3.exibirInfo();


