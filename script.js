const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')
const cardsContainer = document.getElementById('cards-container')

const hanldeSearch = (e) => {
    e.preventDefault()

    searchInput.classList.toggle('hide')
}

searchBtn.addEventListener('click', hanldeSearch)

// API conection
const getPopularMovies = async () => {
    const apiKey = '8ed200f50a6942ca5bc8b5cdec27ff22'
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

    try {
        const response = await fetch(apiUrl)
        const data = await response.json()

        const filmes = data.results
        console.log(filmes)

        filmes.map((filme) => {
            console.log(filme.title)

            const card = document.createElement('div')
            card.innerHTML = `
                <img src="" alt="">

                <h2>${filme.nome}</h2>
                <p><i class="fa fa-star" style="font-size:16px"></i> </p>
                <button>Detalhes</button>
            `
        })
    } catch (error) {
        console.error('Erro ao buscar filmes populares:', error)
    }
};

// Chamada da função para obter filmes populares
getPopularMovies()
