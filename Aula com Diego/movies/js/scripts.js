function render() {
 
    var container = document.getElementById('container')
    var url = 'https://api.themoviedb.org/3/trending/all/day?api_key=1eb455a4d8c509c76af086bb28348f6a'
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
     
        data.results.forEach((movie) => {
            if(movie.media_type !== 'tv') {
                
                let image = "https://image.tmdb.org/t/p/original/" + movie.poster_path

                let card = `<div class="card">
                    <div class="card-image" 
                    style="background-image: url('${image}');"></div>
                    <div class="card-title">
                        ${movie.title}
                    </div>
                    <div class="card-description">
                        ${movie.overview.slice(0, 120)} ...
                    </div>
                    <div class="card-average">
                        ${movie.vote_average}
                    </div>
                </div>`

                container.innerHTML += card
            }
        })
     })

}

render();

