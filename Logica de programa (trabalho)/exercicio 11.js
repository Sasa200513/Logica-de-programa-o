let positivos = 0;

for (let i = 0; i < 6; i++) {
    let valor = parseFloat(prompt("Digite um valor (positivo ou negativo):"));
    if (valor > 0) {
        positivos++;
    }
}

console.log(`Quantidade de valores positivos: ${positivos}`);

/*Faça um programa que leia 6 valores.
 Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.*/