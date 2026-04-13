const caixa = document.querySelector("#caixa");
const area = document.querySelector("#area");

caixa.addEventListener("dragstart", () => {
    console.log("Arrastando...");
})

area.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("Elemento sobre a area!");
})

area.addEventListener("drop", () => {
    console.log("Elemento solto!");

    area.style.backgroundColor = "green";
})