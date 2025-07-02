const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
let texto = document.getElementById('texto1');

numeroTitulo.innerHTML = numero; // Irá mexer no HTML do site após enviar o número no prompt
texto1.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
texto2.innerHTML = `<p>Número inteiro: ${Number.isInteger(numero)}</p>`;
texto3.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto4.innerHTML = `<p>Número arredondado para baixo: ${Math.floor(numero)}</p>`;
texto5.innerHTML = `<p>Número arredondado para cima: ${Math.ceil(numero)}</p>`;
texto6.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;