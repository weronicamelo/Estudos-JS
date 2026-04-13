//criação de objetos
let aluno = { 
    nome: "Ana",
    idade : 20,
    notas : {
        pfe : 100,
        iot : 90,
        pdm : 80
    }
}

console.log(aluno.nome);
//console.log(aluno("[idade]");

aluno.idade = 25;
aluno.curso = "Desenvolvimento de Sistemas";

console.log(aluno);
