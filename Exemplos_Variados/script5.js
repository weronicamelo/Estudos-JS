//for
for (let i = 0; i < 5; i++){
    console.log(i)
}

//foreach - método
let alunos = ["Kauan", "Yuri", "Nicolly", "Maysa"];

alunos.forEach(aluno => {
    console.log(aluno);
});

//for of - laço (retorna os valores)
for (const aluno of alunos) {
    console.log(aluno);
}

//for in - retorna os indices e chaves
for (let aluno in alunos){
    console.log(aluno);
}

const carro = {marca: "VW", modelo: "Jetta GLI", ano: 2025};

for (let chave in carro){
    console.log(`${chave}: ${carro[chave]} texto`);
}

//while
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

//do while
do {
    console.log(i);
    i++;
} while (i < 10);

do{
    numero = prompt("Digite um número maior que 10: ");
}while(i <= 10);