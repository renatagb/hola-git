const form = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let errors = false;

    if (email.value === '') {
        alert('Por favor complete el campo email');
        errors = true;
    } else {
        errors=false
    }

    if (password.value === '') {
        alert('Por favor complete el campo contraseña');
        errors = true;
    } else {
        errors=false

    }
    if (!errors) {
        this.submit();
    }
});

