//let numeros = [1,2,3,4];

//Map
/*let numDobrados = numeros.map(numero => numero * 2);

console.log(numeros, numDobrados);*/

//Filter
/*let maioresQue2 = numeros.filter(numero => numero > 2);

console.log(maioresQue2);*/

//Reduce
/*let total = numeros.reduce((soma, valor) => soma + valor, 0);

console.log(total);*/

const frutas = { maca: 2, pera: 3, abacaxi: 5};
const novoPreco = Object.fromEntries(Object.entries(frutas).map(([chave, valor]) => [chave, valor * 2]));

console.log(novoPreco);