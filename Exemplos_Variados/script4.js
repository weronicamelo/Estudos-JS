const pessoa = {
    nome: "José",
    sobrenome: "Silva",
    idade: 19,
    hobbies: ["Ler", "Crochê", "Jogar Beach Tênis", "Hipismo"],
    apresentar: function(){
        return "Olá, meu nome é José";
    }
};

//dstruct - desmembrar um objeto acessando por cada atributo
//const nome = pessoa.nome;
//const sobrenome = pessoa.sobrenome;
//const idade = pessoa.idade;
//const hobbies = pessoa.hobbies;

//outra forma de fazer
const {nome, sobrenome, idade, hobbies, apresentar} = pessoa

console.log(nome);
console.log(sobrenome);
console.log(idade)
console.log(hobbies);
console.log(pessoa.apresentar());





