function* geradora1() {
    //Código qualquer...
    yield 'Valor 1';
    //Código qualquer...
    yield 'Valor 2';
    //Código qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);


function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };

    return function() {
        console.log('Vim do return');
    }

    //...

    yield function() {
        console.log('Vim do y2');
    };
}


const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();

console.log("Hello World");