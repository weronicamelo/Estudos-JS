class Usuario {
    constructor(nome, email){
        this.nome = nome;
        this.email = email;
    }

    mostrarDados(){
        console.log(`Nome: ${this.nome}`);
        console.log(`E-mail: ${this.email}`);
    }
}

const usuario1 = new Usuario("Maria", "maria@email.com");
const usuario2 = new Usuario("Juan", "juan@email.com");

console.log(usuario1.nome, usuario1.email);
console.log(usuario2.nome, usuario1.email);

usuario1.mostrarDados();
usuario2.mostrarDados();