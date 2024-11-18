const listaRecetas = document.querySelector('.lista-recetas');
let recetas = '';

fetch("https://dummyjson.com/recipes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.recipes);
    
    for (let i = 0; i < data.recipes.length; i++) {
      const receta = data.recipes[i];
      const markup = `
        <article class='receta'>
          <img src="${receta.image}" alt="${receta.name}">
          <h2>${receta.name}</h2>
          <p>Dificultad: ${receta.difficulty}</p>
          <a href="receta.html?id=${receta.id}">Ver detalle</a>
        </article>
      `;
      recetas += markup;
    }
    listaRecetas.innerHTML = recetas;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });

  