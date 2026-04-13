class GerenciadorFinanceiro{
    constructor() {
        this.receitas = [];
        this.despesas = [];
    }

      adicionarReceita(valor) {
        this.receitas.push(valor);
    }

    adicionarDespesas(valor) {
        this.despesas.push(valor);
    }

    calcularSaldo() {
        const totalReceitas = this.receitas.reduce((soma, valor) => soma + valor, 0);
        const totalDespesas = this.despesas.reduce((soma,valor) => soma + valor, 0);

        const saldo = totalReceitas - totalDespesas;

        return saldo;
        
        /*for(let i = 0; i < this.receitas.length; i++){
            totalReceitas += this.receitas[i];
        }
    
        for(let i = 0; i < this.despesas.length; i++){
            totalDespesas += this.despesas[i];
        }*/

        /*return totalReceitas - totalDespesas;*/
    }

    verificarSaudeFinanceira(){
        const saldo = this.calcularSaldo();

        if(saldo > 0){
            return "No azul";
        } else if(saldo === 0){
            return "No limite";
        } else {
            return "No vermelho";
        }
    }
}

const gerenciar = new GerenciadorFinanceiro();

gerenciar.adicionarReceita(1000);
gerenciar.adicionarReceita(500);
gerenciar.adicionarDespesas(300);
gerenciar.adicionarDespesas(200);

console.log(gerenciar.calcularSaldo());
console.log(gerenciar.verificarSaudeFinanceira());