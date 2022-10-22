async function gerador () {
    try {
        container = document.getElementById('container')

        var consultaDados = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=1eb455a4d8c509c76af086bb28348f6a');
        var dadosConvertidos = await consultaDados.json();
    
        if (dadosConvertidos.erro) {
            throw Error('Falha ao coletar dados!');
        }

        console.log('Coleta realizada com sucesso')
        console.log(dadosConvertidos)

        dadosConvertidos.results.forEach((movie) => {
            if (movie.media_type !== "tv") {

                let poster = "https://image.tmdb.org/t/p/original/" +  movie.poster_path;
                
                let nota = (Math.round(parseFloat(movie.vote_average) * 100) / 100).toFixed(1); 
                

                let card = 
                    `<div class="card">
                    <div class="poster" style="background-image: url('${poster}');">></div>
                    <div class="titulo">${movie.title}</div>
                    <div class="sinopse">${movie.overview}</div>
                    <div class="nota">⭐ ${nota}/10</div>
                    </div>`

                container.innerHTML += card
            }
            
        })
    } catch (erro) {
        console.log(erro)
    }
}


gerador();












