let num1 = 9.63532;
//let num2 = Math.floor(num1); //Math.floor() arredonda o número para baixo
//let num2 = Math.ceil(num1); //Math.ceil() arredonda o número para cima
//let num2 = Math.round(num1); //Math.round() arredonda o número para o valor mais próximo
//console.log(num2);

//console.log(Math.max(15,2,3,6,10,500,3000,70,80)); //Math.max() pega o maior valor 
//console.log(Math.min(15,2,-3,6,-10,500,3000,70,80)); //Math.min() pega o menor valor 

const aleatorio = Math.random(); //Math.random() gera números aleatórios entre 0 e 1, porém o 1 não é incluído
console.log(aleatorio); 

const aleatorio1 = Math.round(Math.random() * (10-5) +5); //É possível determinar um limite no Math.random(), por exemplo entre 10 e 5
                                                          //Pode até arredondar o número
console.log(aleatorio1); 
