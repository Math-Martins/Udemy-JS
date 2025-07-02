// Atribuição via destruturação (arrays)

// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [um, dois, tres,...resto] = numeros;

// console.log(um, dois, tres);
// console.log(resto);

const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [um, , tres, , cinco, , sete] = numeros;  // pulando alguns valores da array

console.log(um, tres, cinco, sete);
