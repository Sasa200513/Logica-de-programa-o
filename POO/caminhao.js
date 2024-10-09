//Criando um objeto 'caminhao'
let caminhao = {
    marca: "Volkswagem",      //Propriedade é 'marca' , valor é "Volkswagem"
    modelo: "Constellation",   //Propriedade é 'modelo' , valor é "Constellation"
    ano: 2024,              //Propriedade é 'ano' , valor é "2024"
    cor: "prata",           //Propriedade é 'cor' , valor é "prata"
    cabine:[
        {tipo: 'simples', capacidade: 2, teto: 'fechado'},
        {tipo: 'duplo', capacidade: 5},


    ],

//Metodo: define uma funçao associada ao objeto (ligar)
ligar: function() {
    console.log("O caminhao esta ligado");
 },


 //Metodo: define uma funçao associada ao objeto(desligar)
desligar: function() {
    console.log("O caminhao estao desligado");
},


};

//Acessando propriedades do objeto
console.log(caminhao.cabine[0].tipo);   //Saida: Volkswagem (se colocar '.marca') se colocar cabine, muda
console.log(caminhao["ano"]);  //Saida: 2024


//Chamando o metodo do objeto
caminhao.ligar(); //Saida: O caminhao esta ligado.
