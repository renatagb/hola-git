const queryString = location.search; 
const queryParams = new URLSearchParams(queryString); 
const recetaId = queryParams.get('id'); 

fetch(`https://dummyjson.com/recipes/${recetaId}`)
  .then(function (response) {
    return response.json();
  })
  .then(function(data) {
    document.querySelector('#titulo-receta').innerHTML = data.name;
    const imagenReceta = document.querySelector('#imagen-receta');
    imagenReceta.src = data.image;

    document.querySelector('#tiempo-preparacion').innerHTML = `Tiempo de preparación: ${data.prepTimeMinutes} minutos`;
    document.querySelector('#tiempo-coccion').innerHTML = `Tiempo de cocción: ${data.cookTimeMinutes} minutos`;

    let instruccionesHTML = '';
    for (let i = 0; i < data.instructions.length; i++) {
      instruccionesHTML += `<li>${data.instructions[i]}</li>`;
    }
    document.querySelector('#detalle-receta ol').innerHTML = instruccionesHTML;

    let categoriasHTML = '';
    for (let i = 0; i < data.tags.length; i++) {
        const categoria=data.tags[i]
        categoriasHTML += `<li><a href="category.html?nombre_categoria=${categoria}">${categoria}</a></li>`;
    }
    document.querySelector('#detalle-receta ul').innerHTML = categoriasHTML;
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
