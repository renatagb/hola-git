// Obtener el ID de la receta desde los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const recetaId = params.get('id');

// Seleccionar el contenedor donde se mostrarán los detalles
const detalleRecetaContainer = document.getElementById('detalle-receta');

// Verificar si hay un ID válido
if (!recetaId) {
    detalleRecetaContainer.innerHTML = '<p>Error: No se ha encontrado un ID válido para la receta.</p>';
} else {
    // Llamar a la API para obtener los detalles de la receta
    fetch(`https://dummyjson.com/recipes/${recetaId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los datos de la receta.');
            }
            return response.json();
        })
        .then(data => {
            // Generar el contenido HTML con los detalles de la receta
            const detalleHTML = `
                <article class="detalle">
                    <img src="${data.image}" alt="${data.name}" style="max-width:100%; border-radius:8px;">
                    <h1>${data.name}</h1>
                    <p><strong>Dificultad:</strong> ${data.difficulty}</p>
                    <p><strong>Descripción:</strong> ${data.description}</p>
                    <h3>Ingredientes:</h3>
                    <ul>
                        ${data.ingredients.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
                    </ul>
                    <h3>Instrucciones:</h3>
                    <p>${data.instructions}</p>
                </article>
            `;

            // Inyectar el contenido HTML en el contenedor
            detalleRecetaContainer.innerHTML = detalleHTML;
        })
        .catch(error => {
            console.error('Error:', error);
            detalleRecetaContainer.innerHTML = '<p>Error al cargar los detalles de la receta. Por favor, intenta nuevamente más tarde.</p>';
        });
}
