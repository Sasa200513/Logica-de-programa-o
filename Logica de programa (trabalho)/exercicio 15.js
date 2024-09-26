/* Leia quatro valores inteiros A, B, C e D. A seguir, calcule 
e mostre a diferença do produto de A e B pelo produto de C e D 
segundo a fórmula: DIFERENCA = (A * B - C * D).*/




A = parseInt(prompt("Digite um valor: "))
B = parseInt(prompt("Digite outro valor: "))
C = parseInt(prompt("Digite outro valor: "))
D = parseInt(prompt("Digite outro valor: "))

DIFERENCA = (A * B) - (C * D)

document.write("DIFERENCA = ", DIFERENCA)