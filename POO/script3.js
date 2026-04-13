class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }

    mostrarSituacao() {
        if (this.nota >= 7) {
            console.log(`${this.nome}: Aprovado`);
        } else {
            console.log(`${this.nome}: Reprovado`);
        }
    }
}

const aluno1 = new Aluno("Pedro", 8);
const aluno2 = new Aluno("Maria", 5);

aluno1.mostrarSituacao(); 
aluno2.mostrarSituacao(); 