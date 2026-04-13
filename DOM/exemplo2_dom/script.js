const input = document.getElementById("tarefa");
const botao = document.getElementById("btn");
const lista = document.getElementById("lista");
const itens = document.querySelectorAll("#lista li");

itens.forEach(item => {
    item.addEventListener("click", () => {
        item.remove();
    })
});

botao = addEventListener("click", () => {
    const texto = input.value;

    if(texto === ""){
        alert("Digite um tarefa!");
        return;
    }

    const li = document.createElement("li");
    li.innerText = texto;

    li.addEventListener("click", () =>{
        li.remove();
    })

    lista.appendChild(li);
    input.value = "";
})

