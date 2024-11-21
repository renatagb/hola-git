
const queryString = location.search; 
const queryParams = new URLSearchParams(queryString); 
const resultados2 = queryParams.get('q'); 

const results = document.querySelector('.resultado-busqueda');

if (resultados2 === '') {
    results.innerHTML = `<p class="textobusca">El campo de búsqueda no puede estar vacío.</p>`;
} else if (resultados2.length < 3) {
    results.innerHTML = `<p class="textobusca">El término de búsqueda debe tener al menos 3 caracteres.</p>`;
} else {
    fetch(`https://dummyjson.com/recipes/search?q=${resultados2}`)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let resu = "";

        resu += `<h1>Resultados de búsqueda para: ${resultados2}</h1>`;

        if (data.recipes && data.recipes.length > 0) {
            for (let i = 0; i < data.recipes.length; i++) {
                const receta = data.recipes[i];
                const markup = `
                    <article class='receta'>
                        <img src="${receta.image}" alt="${receta.name}">
                        <h2>${receta.name}</h2>
                        <a href="receta.html?id=${receta.id}">Ver detalle</a>
                    </article>
                `;
                resu += markup;
            }
        } else {
            resu += `<p class="textobusca">No se encontraron resultados para: ${resultados2}</p>`;
        }

        results.innerHTML = resu;
    })
    .catch(function (error) {
        console.log("Error: " + error);
        results.innerHTML = `<p style="color: red;">Ocurrió un error al buscar las recetas.</p>`;
    });
}
