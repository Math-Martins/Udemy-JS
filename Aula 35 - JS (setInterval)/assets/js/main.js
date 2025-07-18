function relogio() {
    function criaSegundos (segundos) {          // Recebe os segundos, cria a data e retorna essa data
        const data = new Date(segundos * 1000);     // Multiplica por mil pq o js recebe em milésimos de segundos
        return data.toLocaleTimeString('pt-BR', {
            hour12:false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target;     // e.target fala qual evento está sendo clicado

        if (el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
        }    
        
        if (el.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }
    });
}

relogio();


// É a mesma coisa que está fazendo o if

// iniciar.addEventListener('click', function(event) {
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     iniciaRelogio();
// });

// pausar.addEventListener('click', function(event) {
//     clearInterval(timer);
//     relogio.classList.add('pausado');
// });

// zerar.addEventListener('click', function(event) {
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     segundos = 0;
// });