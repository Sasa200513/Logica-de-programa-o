/*var numPrimos=0;

for (var i=1; i<=200; i++){
    if (i%1==0 && i%i==0 && i%2==1){
        console.log(i)
    }
}*/

var n = 200;

 function procurarNumeroPrimos(n) {

  var numerosPrimos = [];

  for (var i = 2; i < n; i++){  quantidadeDeDivisores = 0; 

     for(var b = 2; b < i; b++) { 
        if (i % b == 0) {
           quantidadeDeDivisores ++;
        }
     }

     if (quantidadeDeDivisores % i == 0) {
        numerosPrimos.push(i);
     }

  }

return numerosPrimos;
}
console.log(procurarNumeroPrimos(n))