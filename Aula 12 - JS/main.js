// Numbers
let num1 = 2;
let num2 = 3.5;
console.log(num1.toString() + num2); //toString transforma o número numa string
console.log(typeof num1); //Porém como não mudou na variável, continua sendo um number

let n1 = 10.217124523;
let n2 = 2;
console.log(n1.toFixed(2)); //toFixed arredonda o número, colocando a quantidade de casas decimais dentro do parênteses
console.log(Number.isInteger(num1)); //Number.isInteger analisa se o número é inteiro ou não