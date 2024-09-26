/* Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma 
mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores 
lidos são múltiplos entre si.
*/


valores = prompt("Digite dois números separando com espaço cada: ").split(" ")

A = parseInt(valores[0])
B = parseInt(valores[1])

if (A % B == 0 || B % A == 0){
    document.write("Sao Multiplos")
}else{
    document.write("Nao sao Multiplos")
}