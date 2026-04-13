/* Requisição Assíncrona
console.log("Início");

setTimeout(() => {
    console.log("Demorou...");
}, 2000);

console.log("Fim");*/

// Requisição Síncrona
console.log("Início");

function esperarSincrono(ms){
    const dataInicio = Date.now();
    while(Date.now() - dataInicio < ms){
        
    }
}

esperarSincrono(5000);
console.log("Fim");