/*Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário.
 A seguir, mostre o número e o salário do funcionário, com duas casas decimais.*/

 let numero= parseInt(prompt("Digite um numero"))
 let horas = parseInt(prompt("Digite número de horas trabalhadas"))
 let valor = parseFloat(prompt("Qual valor que recebe por hora"))

 let salario = horas*valor

 console.log("NUMBER =", numero)
 console.log("SALARY = U$", salario)
