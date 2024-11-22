const formulario_busqueda = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const errorMessage = document.querySelector('.error_message');

errorMessage.style.display = 'none';

formulario_busqueda.addEventListener('submit', function (event) {
    event.preventDefault(); 
    let error = false;
    

    if (searchInput.value === '') {
        errorMessage.innerText = 'El campo está vacío.';
        errorMessage.style.display = 'block';
        error = true;
    } 
    else if (searchInput.value.length < 3) { 
        errorMessage.innerText = 'El término de búsqueda debe tener al menos 3 caracteres.';
        errorMessage.style.display = 'block';
        error = true;
    } 
    else {
        errorMessage.style.display = 'none'; 
    }

    if (!error) {
        this.submit();
    }
});
