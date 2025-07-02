const data = new Date('2025-01-16 20:18:43');
const diaSemana = data.getDay();

let diaSemanaTexto;

if (diaSemana === 0) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Sexta';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sábado';
} else (diaSemana === 6); {
    diaSemanaTexto = 'Domingo';
}

console.log(diaSemana, diaSemanaTexto);