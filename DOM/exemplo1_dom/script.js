const titulo = document.getElementById("titulo");
const botao = document.getElementById("btnAlterar");
const subtitulo = document.getElementById("subtitulo");
const botaoPersonalizar = document.getElementById("btnPersonalizar");

botao.addEventListener("click", () => {
    titulo.innerText = "Título alterado com sucesso!";
})

botaoPersonalizar.addEventListener("click", () => {
    subtitulo.style.color = "blue";
    subtitulo.style.fontSize = "32px";
    subtitulo.style.fontFamily = "Verdana";
})