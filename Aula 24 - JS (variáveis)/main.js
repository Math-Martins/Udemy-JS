const verdadeiro = true;

// let tem escopo de bloco {...bloco}
// var tem escopo de função, podendo redefinir a variável

let nome = "Luiz";
var nome2= "Martins";

if (verdadeiro) {
    let nome = "Matheus";
    console.log(nome, nome2);
}

var sobrenome = "Oliveira";

function dizerOi () {
    var fala = "Oi";    // restringe a variável apenas para a function, podendo pegar variavéis de fora 
    console.log(sobrenome);
}


dizerOi();