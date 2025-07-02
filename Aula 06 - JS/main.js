const nome = "Matheus";
const sobrenome = "Martins";
const idade = 16;
const peso = 60;
const alturaEmM = 1.75;

let indiceMassaCorporal = peso / (alturaEmM*alturaEmM);
const anoDataNasc = 2024 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, sendo o peso', peso + 'kg.');
console.log(`Sua altura é ${alturaEmM} metro e seu IMC é ${indiceMassaCorporal}`); // Método mais legível
console.log(`${nome} nasceu em ${anoDataNasc}.`);