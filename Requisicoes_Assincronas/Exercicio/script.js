const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    fetch("https://viacep.com.br/ws/05311020/json")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("logradouro").textContent = data.logradouro;
        document.getElementById("cidade").textContent = data.localidade;
    })
    .catch((erro) => {
        console.log("Erro: ", erro);
    });
});