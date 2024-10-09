function Carro(marca,modelo,ano, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.ligar = function() {
        console.log("O carro esta ligado");
    };
}

//Criando uma nova instância de Carro
let meuCarro = new Carro ("Volkswagem", "Gol", 2016, "preto")
console.log(meuCarro.marca);  //Saida: Volkswagem (se colocar '.marca' , mudaria se colocasse outra coisa).
meuCarro.ligar();
console.log(meuCarro)