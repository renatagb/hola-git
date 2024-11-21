const queryString = location.search; 
const queryParams = new URLSearchParams(queryString); 
const nombre_categoria = queryParams.get('nombre_categoria'); 

fetch(`https://dummyjson.com/recipes/tag/${nombre_categoria}`)
.then(function (response) {
    return response.json();
})
.then(function(data){
    console.log(data)
    let info2=data.recipes
    const detalle = document.querySelector('.detalle-cat');
    let deta = "" ;
    for (let i = 0; i < info2.length; i++) {
        const det = info2[i];
        const deta = `
            <article class='det'>
                <img src="${info2[i].image}" alt="${info2[i].name}">
                <h2>${info2[i].name}</h2>
                <p>Dificultad: ${info2[i].difficulty}</p>
                <a href="receta.html?id=${info2[i].id}">Ver detalle</a>
            </article>
        `;
        detalle.innerHTML += deta;
    }
})
.catch(function (error) {
    console.log("Error: " + error);
})