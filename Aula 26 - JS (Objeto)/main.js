// Atribuição via destruturação (objetos)

const pessoa = {
    //nome: "Matheus",
    sobrenome: "Martins",
    idade: 17,
    endereco: {
        bairro: "Vila Helena",
        numero: 212
    }
};

console.log (pessoa.endereco.bairro);

const { nome = 'Ivone', sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome,resto);