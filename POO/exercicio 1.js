class Carro  {
    constructor (marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}
exibirInformacoes() {
console.log (`marca: ${this.marca}, modelo: ${this.modelo}, ano: ${this.ano}`);
} //ou "return `Marca: ${this.marca} , modelo: ${this.modelo}, ano ${this.ano}`
};
let meuCarro = new Carro ("Volkswagem", "Gol", 2016)
meuCarro.exibirInformacoes();



/*Crie uma classe chamada Carro com os seguintes atributos: marca, 
modelo e ano. A classe deve ter um método chamado exibirDetalhes que 
retorne uma string com as informações do carro.*/