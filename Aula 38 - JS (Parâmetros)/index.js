// arguments que sustenta todos os argumentos enviados
function funcao ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
funcao({nome: 'Matheus', sobrenome: 'Martins', idade: 17});

function conta (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('/', 1, 20, 30, 40, 50);