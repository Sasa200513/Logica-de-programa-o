class Veiculo {
    constructor (marca, modelo) {
        this.marca = marca,
        this.modelo = modelo
}
info() {
    return `Veiculo: ${this.marca} ${this.modelo}`;
    }
velocidadeMaxima (){
    return "Velocidade Maxima nao definida"
}
}

class Carro extends Veiculo {
    constructor(marca,modelo,portas) {
        super(marca, modelo);
        this.portas = portas;
    }
info() {
    return `${super.info} | ${this.portas}`
}
velocidadeMaxima () {
    return `Velocidade Maxima: ${super.velocidadeMaxima() } km/hm`
}
}
const meuCarro = new Carro ('Toyota' , 'Corola' , 4)
console.log(meuCarro.info());


