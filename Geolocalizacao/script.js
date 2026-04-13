// //Verifica se o recurso está disponível
// if ("geolocation" in navigator){
//     console.log("Disponível!")
// } else{
//     console.log("Indisponível");
// }

// //Capturando a localização
// navigator.geolocation.getCurrentPosition((posicao) => {
//     console.log("Latitude:", posicao.coords.latitude);
//     console.log("Longitude:", posicao.coords.longitude);
// },
// (erro) => {
//     console.log("Erro: ", erro.message)
// })

const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((posicao) => {
        resultado.innerText = `Latitude: ${posicao.coords.latitude} \nLongitude: ${posicao.coords.longitude}`;
    }, 
    (erro) => {
        resultado.innerText = `Erro: ${erro.message}`;
    }
)

    navigator.geolocation.watchPosition((posicao) => {
        console.log("Atualização: ", posicao.coords);
    })
})