// Factory Functions ou Funções de Fábrica

function criaPessoa (nome, sobrenome, a, p) {
    return{
        nome,
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join();
            console.log(valor);
        },
        fala: function(assunto = 'falando sobre nada') {
            return `${this.sobrenome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        // Getter (transforma o método em atributo)
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Matheus', 'Martins', 1.75, 70);
const p2 = criaPessoa('Melissa', 'Antunes', 1.60, 60)
const p3 = criaPessoa('João', 'Vitor', 1.80, 80);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

// p1.nomeCompleto = 'Maria Oliveira Silva';
// console.log(p1.nomeCompleto);

