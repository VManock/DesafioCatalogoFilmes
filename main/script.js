async function pegaDados () {
    try {
        var consultaDados = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=1eb455a4d8c509c76af086bb28348f6a');
        var dadosConvertidos = await consultaDados.json();
        if (dadosConvertidos.erro) {
            throw Error('Filme não existente!');
        }

        var poster = document.getElementById('poster');
        var titulo = document.getElementById('titulo');
        var sinopse = document.getElementById('sinopse');
        var nota = document.getElementById('nota');
        
        poster.value = dadosConvertidos.find((title));
        titulo.value = dadosConvertidos[0].title;
        sinopse.value = dadosConvertidos[0].overview;
        nota.value = dadosConvertidos[0].vote_average;

        console.log(dadosConvertidos);
        console.log(poster, titulo, sinopse, nota);

        return21;
    } catch (erro) {
        console.log(erro)
    }
}


pegaDados();












// var cep = document.getElementById('cep');
// cep.addEventListener("focusout", () => pegaDados(cep.value));

