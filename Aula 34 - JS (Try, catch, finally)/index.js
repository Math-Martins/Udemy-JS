try {
    // Executa quando não há erros
} catch (e) {
    // Executa quando há erros
} finally {
    // Sempre executa
} 

function retornaData (data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date')
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-2025 12:15:43');
    const hora = retornaData(11);
    console.log(hora);
} catch (e) {
    console.log(e);
} finally {
    console.log('Tenha um ótimo dia!')
}
