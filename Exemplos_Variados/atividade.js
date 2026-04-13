const precos = [10, 20, 30, 40];

const precosDesconto = precos.map(preco => preco * 0.9);

const precosAcimaDe25 = precosDesconto.filter(preco => preco > 25);

const total = precosAcimaDe25.reduce((soma, preco) => soma + preco, 0);

console.log("Preços:", precos);
console.log("Preços com 10% de desconto:", precosDesconto);
console.log("Preços acima de 25:", precosAcimaDe25);
console.log("Total dos preços acima de 25:", total);