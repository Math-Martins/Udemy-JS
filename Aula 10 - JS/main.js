//Exercício para escrever A B C, usando as variáveis com seus valores trocados
let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

//Método usando constante
const varATemp = varB;
const varBTemp = varC;
const varCTemp = varA;
console.log(varATemp, varBTemp, varCTemp);

//Método criando outra váriavel com os respectivos valores
let valorA = varB;
let valorB = varC;
let valorC = varA; 
console.log(valorA, valorB, valorC);

//Método mais recente do JS para trocar os valores com colchetes
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);