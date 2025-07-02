// for (let i = 0; i <= 100; i+= 10) {
//     console.log(`Linha ${i}`);
// }

for (let i = 0; i <= 10; i++) {         // verifica se o número é par
    const par = i % 2 === 0;
    console.log(i, par);
}

const frutas = ['Maçã', 'Pêra', 'Banana', 'Mamão', 'Uva', 'Ameixa'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}