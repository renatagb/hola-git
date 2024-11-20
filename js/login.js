const form = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('password');

const invalidEmail = document.querySelector('.invalid-feedback.email');
const invalidPassword = document.querySelector('.invalid-feedback.password');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let errors = false;

    if (email.value === '') {
        invalidEmail.textContent = 'Por favor complete el campo email';
        invalidEmail.style.display = 'block';
        errors = true;
    } else {
        invalidEmail.style.display = 'none';
    }

    if (password.value === '') {
        invalidPassword.textContent = 'Por favor complete el campo contraseña';
        invalidPassword.style.display = 'block';
        errors = true;
    } else {
        invalidPassword.style.display = 'none';
    }

    if (!errors) {
        this.submit();
    }
});
