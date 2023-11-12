const submitButton = document.querySelector("#submit-button");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const items = document.querySelector(".items");
const errorName = document.querySelector(".name-Error");
const errorEmail = document.querySelector(".email-Error");
const user = document.querySelector("#add-user");
const labelInputEmail = document.querySelector("#label-email");
const labelInputName = document.querySelector("#label-nome");


// Implementando um h1 pelo JavaScript

user.innerHTML = "Login";

submitButton.addEventListener('click', function (event) {

    event.preventDefault();


    const nomeValue = nameInput.value;
    const emailValue = emailInput.value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Expressão regular para verificar o formato do nome
    const regexNome = /^[A-Za-z\s]+$/;



    if (regexEmail.test(emailValue) && regexNome.test(nomeValue)) {

        const li = document.createElement("li");
        li.classList = "item";
        li.innerHTML = `Nome: ${nomeValue} <br />  E-mail: ${emailValue} `;

        items.appendChild(li);

        // Essa forma cria uma tabela de dois elementos estaticos

        cadastroSuccess('Cadastro Feito com sucesso!')

    }
    else {
        // Essa forma cria uma Ul com elementos adicionados toda vez que a condiçao seja verdadeira
        displayError(errorName);
        displayError(errorEmail);
        campoVazio('Preencha Corretamente!');

        setTimeout(() => {
            document.location.reload();
        }, 6000);


    }


    function cadastroSuccess(cadSuccess) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: cadSuccess,
        })



    }

    function displayError(elemento) {
        elemento.style.display = "block";
        elemento.style.border = " solid red";
        elemento.style.borderWidth = "1px";
        labelInputEmail.innerHTML = "Insira um email valido!";
        labelInputName.innerHTML = "Insira um nome valido!";
    }


    function campoVazio(vazio) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'error',
            title: vazio,
        })
    }
});
