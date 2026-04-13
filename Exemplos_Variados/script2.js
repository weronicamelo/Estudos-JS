const produtos = [
    {id: 1, nome: "Teclado Gamer", preco: 250},
    {id: 2, nome: "Mouse Gamer", preco: 130},
    {id: 3, nome: "Monitor Gamer", preco: 1300}
];

const produtoMaisCaro = produtos.find((produto) => {
    return produto.preco > 500;
});

console.log(produtoMaisCaro);

const indiceMouse = produtos.findIndex((produto) => {
    return produto.nome === "Mouse Gamer";
});

console.log(indiceMouse);

const categorias = ["eletronicos", "livros", "moda", "casa", "móveis"];

const temLivro = categorias.includes("livros");
const temBrinquedo = categorias.includes("brinquedo");

console.log(temLivro);
console.log(temBrinquedo);
