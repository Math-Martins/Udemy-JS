            //0123456
const nome = 'Matheus';
console.log(nome[0]);
//                 0       1       2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[0]);     //Para pegar um elemento do array basta colocar a variável e entre o colchetes o número do elemento
alunos[0] = 'Matheus';      //Também temos a opção de trocar o elemento da array
alunos[3] = 'Pedro';        // É possível adicionar um elemento na array

//Para adicionar mais elementos no final do array não precisa saber a quantidade que tem dentro, quando usamos o variável.push()
alunos.push('Emerson');
alunos.push('Kelly');

//Para adicionar um elemento no começo da array, utilizados a variável.unshift()
alunos.unshift('Robson');
console.log(alunos);

//Para remover um elemento do final basta usar a variável.pop();
alunos.pop();

//Para remover um elemento do começo basta usar a variável.shift();
alunos.shift();
console.log(alunos);

//Para fatiar o elementos que serão exibidos, usamos a variável.slice(0, "até o elemento desejado")
console.log(alunos.slice(0,3));
//Nesse caso usamos um número negativo que indica todos os elementos menos ele
console.log(alunos.slice(0,-1));