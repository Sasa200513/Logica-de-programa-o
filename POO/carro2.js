//Criando um objeto "car" com propriedades e metodos

let carro = {
    marca: 'Toyota',
    modelo: 'Corola',
    ano: 2020,
    cor: 'blue',

//Metodo para exibir informaçoes do carro
MostrarInformacao: function() {
    console.log(`Car:${this.marca}, ${this.modelo}, Year: ${this.ano}, Color: ${this.cor}`)


},
//Metodo para alterar a cor do carro
paintCar: function(NovaCor) {
    this.cor = NovaCor;
}
};



//Acessando propriedades
console.log(carro.marca),
console.log(carro.cor),
console.log(carro.ano)
console.log(carro.modelo)

//Chamar metodos
carro.tipoDeCombustivel = "GNV";
console.log(carro.tipoDeCombustivel);
carro.MostrarInformacao(); // Car: Toyota, Year: 2020, Color: blue

delete carro.tipoDeCombustivel  //Pra deleter essa propriedade (carro.tipoDeCombustivel)
console.log(carro.tipoDeCombustivel)

/*console.log('modelo' in carro);
console.log('ano' in carro)
console.log('tipoDeCombustivel' in carro)
console.log(carro)*/

