async function buscarCEP() {
    const cep = document.getElementById("cep").value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        //console.log(data);

        document.getElementById("resultado").innerHTML = 
        `CEP: ${data.cep}
        Logradouro: ${data.logradouro}
        Bairro: ${data.bairro}
        Cidade: ${data.localidade}
        Estado: ${data.uf}`;
        
    } catch (error) {
        console.log(error);
    }
}

//buscarCEP("05311020");