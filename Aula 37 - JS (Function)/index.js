// Declaração de função (function hoisting)
falaOi();
function falaOi() {
    console.log('Oi');
};

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    console.log('Irei executar a sua função abaixo:')
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
};
funcaoArrow();

// Dentro de um objeto 
const obj = {
    falar: function () {
        console.log('Bora conversar...');
    }
};
obj.falar();
