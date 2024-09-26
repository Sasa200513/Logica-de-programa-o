function peças() {
    let totalGeral = 0;
    let numProdutos = parseInt(prompt ("Quantos peças você está comprando?"));
    let recibo ="";

//Estrutura de repetição para capturar informaçoes de cada produto//
    for(let i = 0; i < numProdutos; i++) {
        let nomeProduto = prompt(`Nome do peça ${i + 1}:`);
        let quantidade = parseInt(prompt(`Quantidade de ${nomeProduto}:`))
        let valorUnitario = parseFloat(prompt(`Valor unitario de ${nomeProduto}:`));

     //calcula o valor total do produto
     let valorTotalProduto = quantidade * valorUnitario;
     totalGeral += valorTotalProduto;

     //adiciona as informaçoes no recibo 
    recibo += `${nomeProduto}: ${quantidade} x R$ ${valorUnitario.toFixed(2)} = R$ ${valorTotalProduto.toFixed(2)}`
}
    //exibe o recibo e o total geral//
    recibo += `\nTotal geral: R$ ${totalGeral.toFixed(2)}`;
    alert(recibo);

}
peças()