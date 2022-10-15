function pegaDados () {
    try {
        var consultaDados = fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=1eb455a4d8c509c76af086bb28348f6a`)
        var consultaDadosConvertidos = consultaCEP.json();
        if (consultaDadosConvertidos.erro) {
            throw Error('Filme não existente!');
        }
        var poster = document.getElementById('poster');
        var titulo = document.getElementById('titulo');
        var sinopse = document.getElementById('sinopse');
        var nota = document.getElementById('nota');

        
        poster.value = consultaDadosConvertidos.poster_path;
        titulo.value = consultaDadosConvertidos.title;
        sinopse.value = consultaDadosConvertidos.overview;
        nota.value = consultaDadosConvertidos.vote_average;
        
        console.log(consultaDadosConvertidos);
        return consultaDadosConvertidos;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>Inválido. Tente novamente!</p>`
        console.log(erro)
    }
}


pegaDados

// var cep = document.getElementById('cep');
// cep.addEventListener("focusout", () => pegaDados(cep.value));


