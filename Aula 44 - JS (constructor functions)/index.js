// funções construtoras sempre começam com a letra maiúscula, lembrando sempre de usar o new


function Pessoa (nome, sobrenome) {
    // Atributos ou métodos privados    
    const ID = 123456;
    const metodoInterno = function() {

    };
    
    
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

p1 = new Pessoa('Matheus', 'Martins');
p2 = new Pessoa('Melissa', 'Antunes');
p1.metodo();

console.log(p2.nome);