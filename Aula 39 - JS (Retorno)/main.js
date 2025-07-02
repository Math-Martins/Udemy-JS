// return (retorna um valor) = termina a função

function criaPessoa (nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa ('Matheus', 'Martins');
const p2 = {
    nome: 'Matheus',
    sobrenome: 'Martins'
};

console.log(p1);
console.log(p2);

// Multiplicador
function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(10));
