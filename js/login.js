const formulario = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('password');


formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let errors = false;

    if (email.value === '') {
        alert('Por favor complete el campo email');
        errors = true;
    } 

    if (password.value === '') {
        alert('Por favor complete el campo contraseña');
        errors = true;
    } 
    if (!errors) {
        this.submit();
    }
});

