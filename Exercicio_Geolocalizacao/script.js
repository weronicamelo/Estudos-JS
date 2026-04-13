const btn = document.querySelector("#btn");
const resultado = document.querySelector("#resultado");

btn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((posicao) => {
        console.log("Precisão: ", posicao.coords.accuracy);

        resultado.innerText = "Ver Mapa";
        resultado.href = `https://www.google.com/maps?q=${posicao.coords.latitude},${posicao.coords.longitude}`;

    }, (erro) => {
        resultado.innerText = `Erro: ${erro.message}`;
    });
});