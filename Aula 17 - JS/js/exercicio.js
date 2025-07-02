function meuEscopo () {
    const form = document.querySelector('.form');      // O querySelector seleciona um elemento
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
 //   form.onsubmit = function (evento) {                // onsubit representa o evento que você deseja capturar
 //       evento.preventDefault();                       // preventDefault previne o que aconteria por padrão, ou seja não enviará o formulário
 //       alert('Teste');
 //       console.log('Foi enviado!');                  
 //   };

    let contador = 1;
    function recebeEventoForm (evento) {
    evento.preventDefault();
    //    console.log(`Form não foi enviado ${contador}`);
    //    contador++;

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push ({
        nome: nome.value,                               // O .value puxa o valor do colocado no input
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);               // Adiciona um escutador de eventos no formulário

}     

meuEscopo();    // Executa a função