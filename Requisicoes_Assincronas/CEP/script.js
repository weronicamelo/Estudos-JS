fetch("https://viacep.com.br/ws/05311020/json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.logradouro);
    })
    .catch((erro) => {
        console.log("Erro: ", erro);
    })