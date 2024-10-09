function dividir (a, b) {
    try{
        if( b === 0) {
            throw new Error ("Divisao por zero nao permitida.");
        }
        return a / b;
    } catch(erro) {
        console.log("Erro: " + erro.message);
    }finally {
        console.log("Operaçao finalizada.");
    }
}
console.log(dividir(10 , 2)); //Saida: 5, Operaçao finalizada
console.log(dividir(10, 0)); //Saida: Erro: Divisao por zero nao permitida