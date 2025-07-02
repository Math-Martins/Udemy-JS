function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    }
}

const pessoa1 = criaPessoa('Matheus', 'Martins', 16);
const pessoa2 = criaPessoa('Melissa', 'Antunes', 13);
const pessoa3 = criaPessoa('João', 'Vitor', 20);
console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3);

const teste = {
    nome: 'Matheus',
    sobrenome: 'Martins',
    idade: 16,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

teste.fala();
teste.incrementaIdade();    
teste.fala();   // Aparece com o número acrescentado