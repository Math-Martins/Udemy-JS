// Utiliza-se o camelCasel na constante
// Não pode modificar o valor da constante
// A constante precisa ser criada e inicializada ao mesmo tempo
// NÃO UTILIZE VAR, UTILIZE CONST

const primeiroNumero = 7;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(typeof primeiroNumero); // typeof é para saber o tipo da variável
console.log(typeof (primeiroNumero + segundoNumero)); // Quando for usar o typeof em mais de 1 variável adicione os parenteses