//Definiçao de classe
class Pessoa {
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
//metodo da classe
apresentar () {
    console.log(`Olá meu nome é ${this.nome} e eu tenho ${this.idade}`)
}
}
// Instanciaçao(criaçao) de objetos  partir da classe
const pessoa1 = new Pessoa ("Sara", 18 );  //Pessoa vira objeto
const pessoa2 = new Pessoa ("Miguel" , 20);

//chama metodo da classe dos objetos
pessoa1.apresentar();
pessoa2.apresentar();