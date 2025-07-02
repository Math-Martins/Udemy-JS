function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Matheus');
const funcao2 = retornaFuncao('Martins');

console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());