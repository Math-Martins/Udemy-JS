/* Operadores aritméticos, de atribuição e incremento
   + Adição / Concatenação
   - subtração
   * multiplicação
   / divisão
   ** potenciação
   % resto da divisão
*/
/* Ordem de precedência/resolução:
   ()
   **
   * / %
   + -
*/
// Incremento ++
// Decremento --
let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
console.log(contador++); 
// Operadores de atribuição
let atribui = 2;
atribui **= 10;
console.log(atribui);

//NaN - Not a Number
const num1 = 10;
const num2 = parseInt('5');
console.log(num1 + num2);
console.log(typeof num2); // Transformamos o texto em número

// Mesma situação de cima, porém será com casas decimais, usando o float
const n1 = 10;
const n2 = parseFloat('5.2');
console.log(n1 + n2);
console.log(typeof num2); // Transformamos o texto em número

// Mesma situação de cima, porém usamos o Number que identifica a situação no automático
const a = 10;
const b = Number('5.2');
console.log(a + b);
console.log(typeof num2); // Transformamos o texto em número