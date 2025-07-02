// Variáveis precisam ter nomes significativos (específicos), para identifica-las com facilidade. Ex:
// Lembrando de usar a nomenclatura camelCase
// NÃO UTILIZE VAR, UTILIZE LET
let nomeCompletoDoCliente = "João Vitor";
console.log(nomeCompletoDoCliente);

let esposa; // Declarou a variável
esposa = "Maria"; // Inicializou a variável     
console.log(esposa);

let nome = "Neymar"; // String
console.log(nome, 'nasceu em 1996.');
console.log('Em 2013', nome,'conheceu Maria.');
console.log(nome,'casou-se com Maria em 2015.');    
console.log('Maria teve 2 filhos com', nome + '.');
console.log('Os filhos de', nome, 'são gêmeos.');

nome = "Pietro"; // Não podemos redeclarar a variável com let, apenas trocar seu valor
console.log(nome);