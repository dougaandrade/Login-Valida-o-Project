const submitButton = document.querySelector("#submit-button");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const items = document.querySelector(".items");
const errorName = document.querySelector(".name-Error");
const errorEmail = document.querySelector(".email-Error");
const user = document.querySelector("#add-user");

user.innerHTML ="Login";

submitButton.addEventListener('click', function (event) {

    event.preventDefault();


    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    // Caso não esteja nos paramentros 

    if (nameValue.length == 0 && emailValue.length == 0) {
        errorName.style.display = "block";
        errorEmail.style.display = "block";
        errorEmail.style.border = "solid red";
        errorEmail.style.borderWidth = "1px";
        errorName.style.border = " solid red";
        errorName.style.borderWidth = "1px";
        setTimeout(() => {
            document.location.reload();
        }, 2000);
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
