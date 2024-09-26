nome = prompt("Digite um nome")
salarioFuncionario = parseFloat(prompt("Digite um salário"))
Vendas = parseFloat(prompt("Digite o total de vendas"))
salarioTotal = Vendas * 1.15
document.write("TOTAL = R$", salarioTotal)

/*Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro).
 Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.*/