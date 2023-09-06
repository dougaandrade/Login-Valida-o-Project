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


    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    // Caso não esteja nos paramentros 

    if (nameValue.length == 0 && emailValue.length == 0) {

        displayError(errorName);
        displayError(errorEmail);

        setTimeout(() => {
            document.location.reload();
        }, 7000);

        function displayError(elemento) {
            elemento.style.display = "block";
            elemento.style.border = " solid red";
            elemento.style.borderWidth = "1px";
            labelInputEmail.innerHTML = "Insira um email valido!";
            labelInputName.innerHTML = "Insira um nome valido!";

        }

        // Se estiver nos parametros 

    } else {

        items.style.display = "block";
        items.firstElementChild.textContent = nameValue;
        items.children[1].textContent = emailValue;

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
            title: 'Cadastro Feito com sucesso!'
        })
    }



});
