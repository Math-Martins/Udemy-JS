const nomes = ['Matheus', 'Richard', 'Gustavo'];

for (let valor of nomes) {      // puxa o valor do array
    console.log(valor);
}

for (let indice in nomes) {     //puxa o índice do array
    console.log(indice);
}


// for clássico - Geralmente com iteráveis (array ou strings)
// for in - Retorna o índice ou chave (string, array ou objetos)
// for of - Retorna o valor em si (iteráveis, arrays ou strings)