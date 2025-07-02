// Objeto Date


// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);        // Sempre que usa o 'new', estamos falando de uma função construtora (començando sempre com a letra maiúscula)

const data = new Date('2025-01-14 13:30:34.100');

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);    // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milisegundo', data.getMilliseconds());
console.log('Dia da semana', data.getDay());    // 0 - Domingo, 6 - Sábado
console.log(data.toString());