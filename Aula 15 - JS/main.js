function saudacao(name) {
   return `Bom dia ${name}!`;   /// O return limita o que será exibido
}

const ola = saudacao('Matheus');
console.log(ola);

function soma(x, y) {           // O que vai dentro dos parênteses é o "parâmetro"
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 3));
console.log(soma(3, 4));