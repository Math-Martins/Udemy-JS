                //    0         1          2         3
const familia = ['Matheus', 'Melissa', 'Robson', 'Kelly'];
familia[4] = 'Cacau';
familia.push('Natalice');       //Adiciona ao final (é o mais utilizado)
familia.unshift('Toninho');     //Adiciona no começo (menos utilizado, pois mexe no valor dos outros elemento. Ex: o que está na posição 0 vai para a 1)
console.log(familia);

familia.pop();                  //Retira o último elemento da array
familia.shift();                //Retira o primeiro elemento da array
console.log(familia);           
