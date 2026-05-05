const api_key = "48c2d85efd268ca5de94c8fe";

const botao = document.getElementById("btnConverter");
botao.addEventListener("click", converter);

async function converter() {

    const valor = document.getElementById("valor").value;
    const de = document.getElementById("de").value;
    const para = document.getElementById("para").value;
    const resultado = document.getElementById("resultado");

    if (!valor || !de || !para) {
        resultado.classList.remove("hidden");
        resultado.innerText = "Preencha todos os campos!";
        return;
    }

    try {

        const response = await fetch(
            `https://v6.exchangerate-api.com/v6/${api_key}/latest/${de}`
        );

        const data = await response.json();

        const taxa = data.conversion_rates[para];

        if (!taxa) {
            resultado.classList.remove("hidden");
            resultado.innerText = "Moeda inválida!";
            return;
        }

        const convertido = (valor * taxa).toFixed(2);

        resultado.classList.remove("hidden");
        resultado.innerHTML = `${valor} ${de} = ${convertido} ${para}`;

    } catch (erro) {

        resultado.classList.remove("hidden");
        resultado.innerText = "Erro ao buscar dados!";
        console.error(erro);

    }
}