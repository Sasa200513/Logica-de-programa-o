class Retangulo {
    constructor (largura, altura){
        this.largura = largura;
        this.altura = altura;
    }
calcularArea() {
    //const area = this.largura * this.altura
    console.log(` ${this.altura * this.largura}`)
 //console.log (`A area é ${area}`) 
};
}
let retangulo1 = new Retangulo(6,8) //aqui adiciona os numeros que voce quer o resultado
retangulo1.calcularArea()

/*Crie uma classe Retangulo com os atributos largura e altura. Adicione um 
método calcularArea que retorne a área do retângulo.*/