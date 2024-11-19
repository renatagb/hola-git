const queryString = location.search; 
const queryParams = new URLSearchParams(queryString); 
const resultados2 = queryParams.get('q'); 

fetch(`https://dummyjson.com/recipes/search?q=${resultados2}`)
.then(function (response) {
    return response.json();
})
.then(function(data){
    console.log(data)
    const results = document.querySelector('.resultado');
    let resu=""
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
        resu += markup;
    }
    results.innerHTML = markup;
})

.catch(function (error) {
    console.log("Error: " + error);
})