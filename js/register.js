const formulario_registro = document.querySelector('.register_form')


const email = document.getElementById('email')
const password = document.getElementById('password')

const invalidEmail = document.querySelector('.email')
const invalidPassword = document.querySelector('.password')

formulario_registro.addEventListener('submit', function(event){
    event.preventDefault();
    let error= false;
    if(email.value === ''){
        invalidEmail.innerText = 'Por favor complete este campo';
        invalidEmail.style.display = 'block';
        error=true;
    }else{
        invalidEmail.style.display='none';
    }
    if(password.value === '' ){
        invalidPassword.innerText = 'Por favor complete este campo';
        invalidPassword.style.display = 'block';
        error=true;
    }else{
        invalidPassword.style.display='none';
    }

   
    if(!error){
        this.submit();
    }
       
})

