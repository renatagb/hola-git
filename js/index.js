const recetas=document.getElementById('lista-recetas');
fetch('https://dummyjson.com/recipes?limit=10')
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        const recipes = data.recipes;
    })
    .catch(function(error){

    })