//herança e polimorfismo
class Animal{
    constructor(nome){
        this.nome = nome;
    }

    speak(){
        console.log(`${this.nome} fez um som!`);
    }
}

class Dog extends Animal{
    constructor(nome){
        super(nome);
    }

    speak(){
        console.log(`${this.nome} latiu!`);
    }
}

const animal = new Animal("Bolt");
const dog = new Dog("Nildas");

animal.speak();
dog.speak();