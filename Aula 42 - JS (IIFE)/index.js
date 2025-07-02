// IIFE (Immediately invoked function expresssion) --> Funções imediatas

(function(idade, peso, altura) {
    const sobrenome = 'Martins';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Matheus'));
    }

    falaNome();
    console.log(idade, peso, altura);
    
})(17, 70, 1.75);
