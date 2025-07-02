// for in lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Martins',
    idade: 17
};

/*
console.log(pessoa.nome);
console.log(pessoa['sobrenome']);
*/

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}


//                0       1        2
const frutas = ['Maçã', 'Uva', 'Banana'];

for (let i in frutas) {         // vai ler os índices do vetor "frutas" (0,1,2)
    console.log(i);
}


for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}