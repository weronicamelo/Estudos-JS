const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");
const errorMessage = document.querySelector("#msg");
const items = document.querySelector("#items");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    function showMessageError(message){
        errorMessage.innerText = message;
        errorMessage.classList.replace("opacity-0", "opacity-100")

        setTimeout(() => {
            errorMessage.classList.replace("opacity-100", "opacity-0")

            setTimeout(() =>{
                errorMessage.innerText = "";
            }, 1000);
        }, 3000);

    }

    if(nameValue === "" || emailValue === ""){
        showMessageError("Preencha todos os campos!")
        return;
    }

    if(!emailInput.checkValidity()){
       showMessageError("E-mail inválido!");
       return;
    }

    const li = document.createElement("li");
    li.innerText = `Nome: ${nameValue} - Email: ${emailValue}`;
    li.classList = "bg-white p-2 rounded-lg mt-2 shadow-md w-80 text-center"
    items.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
})
