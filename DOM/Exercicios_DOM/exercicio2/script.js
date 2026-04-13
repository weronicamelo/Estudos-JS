const botao = document.querySelector("#btn");
const body = document.querySelector("body");

botao.addEventListener("click", () => {
    body.classList.toggle("tema-escuro");
});