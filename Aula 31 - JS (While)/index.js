function random (min, max) {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random (min, max);


while (rand !== 10) {                       // Checa a condição para depois aplicar
    rand = random (min, max);
    console.log(rand);
}

console.log('########');

do {                                        // Faz e depois checa a condição
    rand = random (min, max);
    console.log(rand);
} while (rand !== 10);