const caixa = document.querySelector("#caixa");
const area = document.querySelector("#area");

caixa.addEventListener("dragstart",(e) => {
    e.dataTransfer.setData("text/plain", "caixa");
})
 
area.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("Elemento sobre a area!");
})

area.addEventListener("drop", (e)=>{
    console.log("Elemento solto!");
    document.querySelector("#area").style.background = "black";

    const id = e.dataTransfer.getData("text");
    const elemento = document.getElementById(id);
    area.appendChild(elemento);
})

