function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError ('x e y precisam ser números.');   // lança um erro
    }
    return x + y;
}

try {
    console.log(soma(1,3));
    console.log(soma('1',3));
} catch (error) {
    // console.log(error);
    console.log('Alguma coisa menos tenebrosa para o usuário!')
}
