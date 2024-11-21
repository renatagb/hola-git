fetch('https://dummyjson.com/recipes/tags')
.then(function (response) {
    return response.json();
})
.then(function(data){
    const listaCategorias = document.querySelector('.lista-categorias');
    let categoria_2=""
    for (let i = 0; i < data.length; i++) {
        categoria_2+=`
        <article class='categoria'>
            <h2><a href="category.html?nombre_categoria=${data[i]}">${data[i]}</a></h2>
        </article>
    `;
    }
    listaCategorias.innerHTML=categoria_2
})

.catch(function (error) {
    console.log("Error: " + error);
})