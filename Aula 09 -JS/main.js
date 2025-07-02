//APLIQUE NO NAVEGADOR
// O alerta é um atalho do window.alert
window.alert('Mensagem antiga!')
alert('Mensagem nova!');

// O window.confirm trabalha com número bolean
window.confirm('Deseja continuar?')

// window.prompt possibilita que o usuário escreva uma resposta
window.prompt('Escreva seu hobby preferido:')

// Armazena a resposta do usuário
const confirma = confirm('Deseja apagar?');     
confirma; // Não precisa escrever o console.log porque o navegador nos oferece essa facilidade

/* APLICAÇÃO DE SOMA NO NAVEGADOR
alert('Iremos somar 2 números!');
undefined
let n1 = prompt('Digite o primeiro número:');
undefined
let n2 = prompt('Digite o segundo número:');
undefined
n1 + n2
'1030'
n1 = parseInt(n1);
10
n2 = parseInt(n2);
30
n1 + n2
40
let resultado = n1 + n2;
undefined
console.log(`O resultado da soma é ${resultado}!`);
O resultado da soma é 40!
console.log(`O resultado da soma é ${n1 + n2}!`);   É POSSÍVEL REALIZAR A EXPRESSÃO NA CHAVE MESMO
O resultado da soma é 40!
*/