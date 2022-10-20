async function pegaDados () {
    try {
        var consultaDados = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=1eb455a4d8c509c76af086bb28348f6a');
        var dadosConvertidos = await consultaDados.json();
    
        var poster = document.getElementById('poster');
        var titulo = document.getElementById('titulo');
        var sinopse = document.getElementById('sinopse');
        var nota = document.getElementById('nota');
        
        poster.innerHTML = dadosConvertidos.find((title));
        titulo.value = dadosConvertidos[0].title;
        sinopse.value = dadosConvertidos[0].overview;
        nota.value = dadosConvertidos[0].vote_average;

        console.log(dadosConvertidos);
        console.log(poster, titulo, sinopse, nota);

        return;
    } catch (erro) {
        console.log(erro)
    }
}


pegaDados();


/* async function pegaDados () {

    var container = document.getElementById('container')
    var consultaDados = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=1eb455a4d8c509c76af086bb28348f6a');
    var dadosConvertidos = await consultaDados.json();

    (dadosConvertidos) => {
        dadosConvertidos.results.forEach((movie)) => {
            console.log(movie)
            if(movie.media_type !== 'tv') {

                let image = "https://image.tmdb.org/t/p/original/" + movie.poster_path;

                let card = `
                    ${movie.title}
                    ${movie.overview}
                    ${image}
                    ${movie.average}

                ` //html code
                
                container.innerHTML += card
            }
        }


}}

*/









// var cep = document.getElementById('cep');
// cep.addEventListener("focusout", () => pegaDados(cep.value));

