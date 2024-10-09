let carro = {
    fabricante: "Volkswagen",
    modelo: "Gol",
    ano: 2018,
    cor: "azul royal",
    quilometragem: 0,

//Metodo para dirigir o carro e aumentar a quilometragem
    dirigir: function(distancia) {
        this.quilometragem += distancia;
    },
    exibirInformacoes: function() {
        console.log(`Carro: ${this.fabricante} ${this.modelo}, Ano: ${this.ano}, Quilometragem: ${this.quilometragem} km, Cor: ${this.cor}`)
    },

//Metodo para alterar a cor do carro
    pintarCarro: function(novaCor) {
        this.cor = novaCor;
    }
};

//Testando o objeto 'carro'
carro.dirigir(50); //aumenta a quilometragem em 50 km
carro.exibirInformacoes(); // Exibe informações após dirigir


// Pintando o carro de azul
carro.pintarCarro("vermelho sangue"); //Muda a cor do carro para vermelho sangue;
carro.exibirInformacoes(); //Exibe: carro: Volkswagem Golbola, Ano: 2018